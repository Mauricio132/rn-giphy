import React, { useState, useCallback } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import SectionFavoriteGifs from "../components/SectionFavoriteGifs";
import { getGifsFovorite } from "../services/FavoriteService";
import { layoutStyle, color } from "../../styles/";

export default function Favorite() {
  //variable de estado, arreglo de favoritos
  const [favorites, setFavorites] = useState([]);
  //variable de estado, item fav eliminado
  const [itenDeleted, setItemDeleted] = useState(false);
  //variable de estado, onPress Compartir
  const [sharing, setSharing] = useState(false);

  //hook de efecto secundario cuando la pantalla esta enfocada
  useFocusEffect(
    //devolverá una versión memorizada del callback que solo cambia si una de las dependencias ha cambiado.
    useCallback(() => {
      (async () => {
        //peticion de a local storagee
        const response = await getGifsFovorite();
        //asiganar favoritos
        setFavorites(response);
        //dispara useFocusEffect
        setItemDeleted(false);
      })();
    }, [itenDeleted]) // Solo se vuelve a ejecutar si [itenDeleted] cambia de valor
  );

  return (
    <View>
      <SectionFavoriteGifs
        favorites={favorites}
        setItemDeleted={setItemDeleted}
        setSharing={setSharing}
      />
      {sharing && (
        <View style={layoutStyle.reload}>
          <ActivityIndicator size="large" color={color.white} />
          <Text style={layoutStyle.reloadText}>Compartiendo...</Text>
        </View>
      )}
    </View>
  );
}
