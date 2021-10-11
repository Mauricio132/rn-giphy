import * as FileSystem from "expo-file-system";
import environment from "../../enviaroments/environment";

const Dir = FileSystem.cacheDirectory + `${environment.giphyCache}/`;
const dirfileUri = (id) => Dir + `gif_${id}.gif`;

// see https://developers.giphy.com/docs/api/schema#image-object
// funcion, retorna url de descarga
const url = (id) => `https://media1.giphy.com/media/${id}/200.gif`;

// funcion, comprobando si el directorio existe, si no existe lo crea
async function ensureDirExists() {
  const dirInfo = await FileSystem.getInfoAsync(Dir);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(Dir, { intermediates: true });
  }
}

// retorna uri de nuestro archivo local. Si no existe localmente, descargamos el archivo
export async function getSingleGif(id) {
  await ensureDirExists();

  const fileUri = dirfileUri(id);
  const fileInfo = await FileSystem.getInfoAsync(fileUri);

  if (!fileInfo.exists) {
    await FileSystem.downloadAsync(url(id), fileUri);
  }
  return fileUri;
}

// Deletes whole giphy directory with all its content
export async function deleteAllGifs() {
  await FileSystem.deleteAsync(Dir);
}
