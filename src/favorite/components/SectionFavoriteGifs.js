import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
//import { map } from "lodash";
import CardGif from "./CardFavoriteGif";
//import { apiGiphySearch } from "../services/GiphyServices";

export default function SectionFavoriteGifs(props) {
  //props recibidos, termi de busqueeda
  const { favorites, setItemDeleted, setSharing } = props;

  //renderizamos el item del array
  const renderItem = ({ item }) => (
    <CardGif
      itemGif={item}
      setItemDeleted={setItemDeleted}
      setSharing={setSharing}
    />
  );

  return (
    <>
      <FlatList
        data={favorites}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}
