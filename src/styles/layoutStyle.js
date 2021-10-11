import { StyleSheet, Dimensions } from "react-native";
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
  reload: {
    backgroundColor: "#000",
    position: "absolute",
    width: "100%",
    height: Dimensions.get("window").height,
    opacity: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
  reloadText: {
    marginTop: 10,
    color: "#fff",
  },
});

export default layoutStyle;
