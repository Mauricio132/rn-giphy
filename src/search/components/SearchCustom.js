import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";

export default function SearchCustom(props) {
  //props recibidos, termino de busuq
  const { setTerm } = props;
  //variable de estado, termino de busqueda de caja input
  const [searchQuery, setSearchQuery] = React.useState("");
  //funcion asignando valor termino de busqueda
  const onChangeSearch = (query) => setSearchQuery(query);

  //hook de efecto (se ejecuta despues de renderizarse/actualizar el componente
  useEffect(() => {
    //nuevo termino de busqueda generado y asigando
    setTerm(searchQuery);
  }, [searchQuery]); //ejecucion cada que la variable searchQuery cambie su valor

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
}
