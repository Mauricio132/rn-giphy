import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Divider } from "react-native-paper";
import { apiGiphyCategorie } from "../services/CategorieService";
import ChipsCategorie from "../components/ChipsCategorie";
import ListSubCategorie from "../components/ListSubCategorie";
import StatusBarCustom from "../../shared/StatusBarCustom";
import ScreenLoading from "../../shared/ScreenLoadng";
import { layoutStyle } from "../../styles";

export default function Categorie() {
  //variable de estado, lista de categrias
  const [categories, setCategories] = useState([]);
  //variabe de estado, lista de subcategoria
  const [subcategorie, setSubCategorie] = useState([]);
  //variable de estado, mostrar lista de subcategorias o busqueda por subcategoria
  const [showSearch, setShowSearch] = useState(false);
  //variable de estado, categoria seleccionada actual y previa
  const [name, setName] = useState("");
  //variable de estado, estado pantalla de carga
  const [loading, setLoading] = useState(false);

  //hook de efecto, ejecucion despues de cada rendizado y actualizacion del componente
  useEffect(() => {
    //mostrando  pantalla de carga
    setLoading(true);
    //funcion asincrona autoejecutable
    (async () => {
      //crando categorias temporal
      let categories = [];
      //obteniendo categorias desde la api de Giphy
      const response = await apiGiphyCategorie();
      //asignando categorias a array temporal
      response.data.map((categorie) => {
        categories.push({
          name: categorie.name,
          name_encoded: categorie.name_encoded,
          select: false,
          subcategories: categorie.subcategories,
        });
      });
      //focus primer elemento
      categories[0].select = true;
      setCategories(categories);
      setName(categories[0].name);
      //mostrando  pantalla de carga
      setLoading(false);
    })();
  }, []); // ejecucion por primera y unica vez despues del renderizado del componente

  //hook de efecto, ejecucion despues de cada rendizado y actualizacion del componente
  useEffect(() => {
    //crando categorias temporal
    let ctg = [];
    //recorremos array de categorias
    categories.map((categorie) => {
      if (categorie.name === name) {
        ctg.push({
          name: categorie.name,
          name_encoded: categorie.name_encoded,
          select: true,
          subcategories: categorie.subcategories,
        });
        setSubCategorie(categorie.subcategories);
      } else {
        ctg.push({
          name: categorie.name,
          name_encoded: categorie.name_encoded,
          select: false,
          subcategories: categorie.subcategories,
        });
      }
    });
    //asiganamos nuevo array con la categoria actual seleccionada
    setCategories(ctg);
    //cerrando componeente sectionGifs
    setShowSearch(false);
  }, [name]); // ejecucion cada que el valor de selectCtg cambie

  return (
    <>
      <StatusBarCustom />
      <View style={styles.containerCategorie}>
        <ChipsCategorie categories={categories} setName={setName} />
      </View>
      <Divider style={layoutStyle.lineDivisor} />
      {loading ? (
        <ScreenLoading text={`Cargando ${name}`} />
      ) : (
        <ListSubCategorie
          subcategorie={subcategorie}
          setShowSearch={setShowSearch}
          showSearch={showSearch}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  containerCategorie: {
    padding: 20,
  },
});
