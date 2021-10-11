import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import { showToastShort } from "../../shared/ToastCustom";
import { openShareDialogAsync } from "../../shared/ShareSocialCustom";
import { updateGifsFovorite } from "../../favorite/services/FavoriteService";
import {
  getSingleGif,
  deleteAllGifs,
} from "../../home/services/FileSystemService";
import { color } from "../../styles";

export default function CardGif(props) {
  //props recibidos
  const { itemGif, setSharing } = props;

  //funcion, añadir a favorito
  const addFovorite = (itemGif) => {
    showToastShort(`Añadiendo ${itemGif.title} a favoritos `);
    updateGifsFovorite(itemGif);
  };

  //funcion, share social
  const shareSocialGif = async (id) => {
    try {
      setSharing(true);
      const response = await getSingleGif(id);
      await openShareDialogAsync(response);
      deleteAllGifs();
      setSharing(false);
    } catch (error) {
      showToastShort(`Ocurrio un error, vuelva a intentarlo`);
      setSharing(false);
      console.error("error", error);
    }
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
        <Text style={[styles.name]} numberOfLines={2} ellipsizeMode="tail">
          {itemGif.title}
        </Text>
        <View style={styles.action}>
          <Button
            style={styles.button}
            mode="text"
            icon="share"
            labelStyle={styles.buttonLabel}
            onPress={() => shareSocialGif(itemGif.id)}
          >
            Compartir
          </Button>
          <Button
            style={styles.button}
            mode="text"
            icon="heart"
            labelStyle={styles.buttonLabel}
            onPress={() => addFovorite(itemGif)}
          >
            Favorito
          </Button>
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
    borderBottomWidth: 0.2,
  },
  image: {
    height: 150,
    resizeMode: "contain",
  },
  name: {
    fontSize: 15,
    paddingVertical: 3,
    paddingStart: 10,
    color: color.global,
  },
  action: {
    flexDirection: "row",
  },
  button: {
    width: "50%",
  },
  buttonLabel: {
    fontSize: 12,
    color: color.secondary,
  },
});
