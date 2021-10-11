import React, { useState, useEffect } from "react";
import { FlatList, View, ActivityIndicator, StyleSheet } from "react-native";
import { map } from "lodash";
import CardGif from "./CardGif";
import {
  apiGiphySearch,
  apiGiphySearchPagination,
} from "../services/GiphyServices";
import environment from "../../enviaroments/environment";
import { color } from "../../styles";

export default function SectionGifs(props) {
  //props recibidos, termi de busqueeda
  const { search, setSharing } = props;
  //variable de estado, objeto que contendra elementos recibidos desde la api
  const [apiGiphy, setApiGiphy] = useState([]);
  ///variable de estado, loadingfooter | condicion para activar spinner de carga
  const [loadingFooter, setLoadingFooter] = useState(true);
  ///variable de estado, pagination Giphy
  const [pagination, setPagination] = useState(0);

  //hook de efecto (se ejecuta despues de renderizarse el componente)
  useEffect(() => {
    //reiniciamos paginacion
    setPagination(0);
    // activamos spinner de carga
    setLoadingFooter(true);
    //funcion anonima autoejecutable de tipo async
    (async () => {
      //crando categorias en cache
      let gifs = [];
      //peticion y asignacion de los productos, al api server
      const response = await apiGiphySearch(search);
      //asignando gifs a array temporal
      map(response.data, (gif) => {
        gifs.push({
          id: gif.id,
          title: gif.title,
          url: gif.images.downsized_medium.url,
        });
      });
      //asignando elementos a apiGiphy
      setApiGiphy(gifs);
      //desactivamos spinner de carga
      setLoadingFooter(false);
    })();
  }, [search]); // ejecucion cada que la variable search cambie su valor

  //hook de efecto (carga mas elemtos al componente Flatlsist)
  useEffect(() => {
    //activamos spinner de carga
    setLoadingFooter(true);
    //funcion anonima autoejecutable de tipo async
    (async () => {
      //crando categorias en cache
      let gifs = [];
      //peticion y asignacion de los gifs de la sgt pagina, al api server
      const response = await apiGiphySearchPagination(search, pagination);
      //asignando gifs a array temporal
      map(response.data, (gif) => {
        gifs.push({
          id: gif.id,
          title: gif.title,
          url: gif.images.downsized_medium.url,
        });
      });
      //añadimos mas elementos a apiGiphy
      setApiGiphy(apiGiphy.concat(gifs));
      //desactivamos spinner de carga
      setLoadingFooter(false);
    })();
  }, [pagination]); // ejecucion cada que la variable pagination cambie cambie su valor

  //funcion, renderizar item del array
  const renderItem = ({ item }) => (
    <CardGif itemGif={item} setSharing={setSharing} />
  );

  //funcion, renderizar componente footerList(loading) | muestra un spinner de carga al final de la lista
  const renderFooter = () => {
    return (
      loadingFooter && (
        <View style={styles.loaderFooter}>
          <ActivityIndicator size="small" color={color.success} />
        </View>
      )
    );
  };

  //funcion, ejecucion cuando nos deslizamos hasta el utimo elemento de la lista
  const loadMoreItems = () => {
    setLoadingFooter(true);
    setPagination((statePrev) => statePrev + environment.apiGiphyLimit);
  };

  return (
    <>
      <FlatList
        data={apiGiphy}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={renderFooter}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0.1}
      />
    </>
  );
}

const styles = StyleSheet.create({
  loaderFooter: {
    alignItems: "center",
    marginVertical: 20,
  },
});
