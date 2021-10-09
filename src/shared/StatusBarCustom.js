import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { color } from "../styles";

export default function StatusBarCustom(props) {
  //props recibidos, modificacion de estatus bar
  const { backgroundColor, barStyle } = props;

  return (
    <StatusBar
      barStyle={barStyle}
      backgroundColor={backgroundColor}
      animated={true}
    />
  );
}

StatusBarCustom.defaultProps = {
  backgroundColor: color.white,
  barStyle: "dark-content",
};
