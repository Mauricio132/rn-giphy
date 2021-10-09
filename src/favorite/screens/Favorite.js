import React, { useState, useCallback } from "react";
import { View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import SectionFavoriteGifs from "../components/SectionFavoriteGifs";
import { getGifsFovorite } from "../services/FavoriteService";

export default function Favorite() {
  //variable de estado, arreglo de favoritos
  const [favorites, setFavorites] = useState([]);
  //variable de estado, item fav eliminado
  const [itenDeleted, setItemDeleted] = useState(false);

  //hook de efecto secundario cuando la pantalla esta enfocada
  useFocusEffect(
    //devolverá una versión memorizada del callback que solo cambia si una de las dependencias ha cambiado.
    useCallback(() => {
      (async () => {
        //peticion de a local storagee
        const response = await getGifsFovorite();
        //asiganar favoritos
        setFavorites(response);
        setItemDeleted(false);
      })();
    }, [itenDeleted]) // Solo se vuelve a ejecutar si [itenDeleted] cambia de valor
  );

  return (
    <View>
      <SectionFavoriteGifs
        favorites={favorites}
        setItemDeleted={setItemDeleted}
      />
    </View>
  );
}
