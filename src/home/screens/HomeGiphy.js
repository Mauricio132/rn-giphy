import React, { useState } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import StatusBarCustom from "../../shared/StatusBarCustom";
import ScreenInfo from "../../shared/ScreenInfo";
import SearchCustom from "../../search/components/SearchCustom";
import SectionGifs from "../components/SectionGifs";
import { color, layoutStyle } from "../../styles";

export default function HomeGiphy() {
  //variable de estado, termino de busqueda de caja input
  const [term, setTerm] = useState("");
  //variable de estado, onPress Compartir
  const [sharing, setSharing] = useState(false);

  return (
    <>
      <StatusBarCustom />
      <View style={styles.container}>
        <SearchCustom setTerm={setTerm} />
      </View>
      {term === "" ? (
        <ScreenInfo />
      ) : (
        <SectionGifs search={term} setSharing={setSharing} />
      )}
      {sharing && (
        <View style={layoutStyle.reload}>
          <ActivityIndicator size="large" color={color.white} />
          <Text style={layoutStyle.reloadText}>Compartiendo...</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: color.light,
  },
});
