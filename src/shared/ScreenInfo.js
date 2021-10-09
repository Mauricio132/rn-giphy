import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StatusBarCustom from "./StatusBarCustom";
import { color, layoutStyle } from "../styles/";

export default function ScreenInfo(props) {
  //props recibidos, mensajes personalizados
  const { text } = props;

  return (
    <>
      <StatusBarCustom></StatusBarCustom>
      <View style={layoutStyle.container}>
        <Text style={styles.title}>{text.title}</Text>
        <Text style={styles.description}>{text.description}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: "center",
    padding: 1,
    color: color.dark,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    padding: 20,
    color: color.secondary,
  },
  btnText: {
    alignItems: "flex-end",
    fontSize: 18,
    padding: 15,
  },
  btnTextColor: {
    color: color.secondary,
    textDecorationLine: "underline",
  },
});

//mensaje por defecto
ScreenInfo.defaultProps = {
  text: {
    title: "Gifs Giphy",
    description: "",
  },
};
