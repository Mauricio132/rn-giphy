import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import StatusBarCustom from "../../shared/StatusBarCustom";
import ScreenInfo from "../../shared/ScreenInfo";
import SearchCustom from "../../search/components/SearchCustom";
import SectionGifs from "../components/SectionGifs";
import { color } from "../../styles";

export default function HomeGiphy() {
  //variable de estado, termino de busqueda de caja input
  const [term, setTerm] = useState("");

  return (
    <>
      <StatusBarCustom />
      <View style={styles.container}>
        <SearchCustom setTerm={setTerm} />
      </View>
      {term === "" ? <ScreenInfo /> : <SectionGifs search={term} />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: color.light,
  },
});
