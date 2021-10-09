import React from "react";
import { View, Text, StyleSheet, Image, Share } from "react-native";
import { Button } from "react-native-paper";
import { showToastShort } from "../../shared/ToastCustom";
import { deleteGifsFovorite } from "../services/FavoriteService";
import { color } from "../../styles";

export default function CardGif(props) {
  //props recibidos
  const { itemGif, setItemDeleted } = props;

  //funcion, eliminar a favorito
  const deleteFovorite = (itemGif) => {
    setItemDeleted(true);
    showToastShort("eliminando de favoritos");
    deleteGifsFovorite(itemGif);
  };

  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <Image
          style={styles.image}
          source={{
            uri: `${itemGif.url}`,
          }}
        />
        <View style={styles.action}>
          <Text style={[styles.name]} numberOfLines={2} ellipsizeMode="tail">
            {itemGif.title}
          </Text>
          <Button
            style={styles.button}
            mode="text"
            icon="heart"
            labelStyle={[styles.buttonLabel, { color: color.danger }]}
            onPress={() => deleteFovorite(itemGif)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    padding: 5,
  },
  product: {
    padding: 5,
    borderWidth: 0.5,
  },
  image: {
    height: 150,
    resizeMode: "contain",
  },
  name: {
    fontSize: 15,
    paddingVertical: 3,
    paddingStart: 10,
    color: color.secondary,
    width: "65%",
  },
  action: {
    flexDirection: "row",
  },
  button: {
    width: "10%",
  },
  buttonLabel: {
    fontSize: 20,
    color: color.global,
  },
});
