import environment from "../../enviaroments/environment";

const apiGiphy = environment.apiGiphy;
const apiKeyGiphy = environment.apiKeyGiphy;

export async function apiGiphyCategorie() {
  try {
    const url = `${apiGiphy}/categories?api_key=${apiKeyGiphy}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
}
