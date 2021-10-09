import { StyleSheet } from "react-native";
import color from "./color";

const layoutStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  tabNavigator: {
    backgroundColor: color.white,
    padding: 10,
  },
  lineDivisor: {
    borderBottomColor: color.secondary,
    borderBottomWidth: 0.5,
    marginRight: "5%",
    marginLeft: "5%",
  },
  containerTitle: {
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: "normal",
  },
});

export default layoutStyle;
