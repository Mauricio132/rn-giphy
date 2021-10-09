import environment from "../../enviaroments/environment";

const apiGiphy = environment.apiGiphy;
const apiKeyGiphy = environment.apiKeyGiphy;
const limit = environment.apiGiphyLimit;

export async function apiGiphySearch(term) {
  try {
    const url = `${apiGiphy}/search?api_key=${apiKeyGiphy}&q=${term}&limit=${limit}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
}

export async function apiGiphySearchPagination(term, offset) {
  try {
    const url = `${apiGiphy}/search?api_key=${apiKeyGiphy}&q=${term}&limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
}
