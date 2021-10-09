import { StyleSheet } from "react-native";
import color from "./color";

const formStyle = StyleSheet.create({
  input: {
    marginBottom: 15,
  },
  btn: {
    padding: 5,
  },
  btnSucces: {
    backgroundColor: color.success,
  },
  btnDanger: {
    backgroundColor: color.danger,
  },
  btnText: {
    marginTop: 10,
    color: color.dark,
  },
  btnTextInfo: {
    color: color.primary,
  },
});

export default formStyle;
