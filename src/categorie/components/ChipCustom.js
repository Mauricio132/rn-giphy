import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Chip } from "react-native-paper";

export default function ChipCustom(props) {
  //props recibidos; nombre de categoria, estado seleccionado true/false ?, name_encoded seleccionado
  const { categorie, select, setName } = props;

  //funcion, obtener el nombre de la categoria seleccionada
  const selectCtg = (categorie) => {
    setName(categorie);
  };

  return (
    <TouchableWithoutFeedback onPress={() => selectCtg(categorie)}>
      <Chip style={styles.container} mode="outlined" selected={select}>
        {categorie}
      </Chip>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
});

ChipCustom.defaultProps = {
  categorie: "inserte una categoria",
};
