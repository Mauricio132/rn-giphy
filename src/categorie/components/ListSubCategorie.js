import React, { useState } from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import { map } from "lodash";
import SectionGifs from "../../home/components/SectionGifs";
import { color, layoutStyle } from "../../styles";

export default function ListSubCategorie(props) {
  //props recibidos, arreglo de subcategorias
  const { subcategorie, setShowSearch, showSearch } = props;
  //variable de estado, termino de busqueda
  const [search, setSearch] = useState("");

  //funcion, asignar termino de busqueda y mostrar busqueda
  const searchOn = (term) => {
    setSearch(term);
    setShowSearch(true);
  };

  return (
    <>
      {showSearch ? (
        <>
          <View style={[styles.container, styles.action]}>
            <Text
              style={[layoutStyle.containerTitle, { width: "75%" }]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              se muestra resultados de: {search}
            </Text>
            <Button
              mode="text"
              icon="arrow-left"
              color={color.success}
              onPress={() => setShowSearch(false)}
            >
              Volver
            </Button>
          </View>
          <SectionGifs search={search} />
        </>
      ) : (
        <ScrollView style={styles.container}>
          {map(subcategorie, (item) => (
            <TouchableNativeFeedback
              key={item.name_encoded}
              onPress={() => searchOn(item.name)}
            >
              <View style={styles.historyItem}>
                <Text style={styles.text}>{item.name} </Text>
                <AwesomeIcon name="arrow-right" size={15} />
              </View>
            </TouchableNativeFeedback>
          ))}
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  historyItem: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderBottomWidth: 0.3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: color.secondary,
    fontSize: 18,
    fontWeight: "bold",
  },
  action: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
});
