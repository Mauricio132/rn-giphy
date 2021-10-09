import AsyncStorage from "@react-native-async-storage/async-storage";
import { map, mapKeys } from "lodash";
import environment from "../../enviaroments/environment";

const giphyFavorite = environment.giphyFavorite;

export async function getGifsFovorite() {
  try {
    const favorites = await AsyncStorage.getItem(giphyFavorite);
    if (!favorites) return [];

    return JSON.parse(favorites);
  } catch (e) {
    return [];
  }
}

export async function updateGifsFovorite(item) {
  let existFav = false;
  const favorites = await getGifsFovorite();

  map(favorites, (fav) => {
    if (fav.id === item.id) {
      existFav = true;
    }
  });

  if (existFav === false) favorites.unshift(item);

  await AsyncStorage.setItem(giphyFavorite, JSON.stringify(favorites));
}

export async function deleteGifsFovorite(item) {
  let tempFavorites = [];
  const favorites = await getGifsFovorite();

  map(favorites, (fav) => {
    if (fav.id != item.id) {
      tempFavorites.push(fav);
    }
  });

  await AsyncStorage.setItem(giphyFavorite, JSON.stringify(tempFavorites));
}
