import React from "react";
import { StyleSheet } from "react-native";
import { map } from "lodash";
import ChipCustom from "./ChipCustom";
import { ScrollView } from "react-native-gesture-handler";

export default function ChipsCategorie(props) {
  //props enviados, categorias, nombre actal de categoria seleccionada
  const { categories, setName } = props;

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.contentContainer}
    >
      {map(categories, (categorie) => (
        <ChipCustom
          key={categorie.name_encoded}
          categorie={categorie.name}
          select={categorie.select}
          setName={setName}
        ></ChipCustom>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginBottom: 10,
  },
});
