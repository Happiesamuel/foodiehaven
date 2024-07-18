import { API_KEY, BASE_URL } from "./apiHelp";

export async function getSearchRecipe(query) {
  const res = await fetch(
    `${BASE_URL}/complexSearch?query=${query}&number=1200&apiKey=${API_KEY}`
  );
  if (!res.ok) throw new Error(`Unable to search recipe for ${query}`);
  const data = await res.json();
  return data;
}

export async function getRecipeData(id) {
  const res = await fetch(`${BASE_URL}/${id}/information?apiKey=${API_KEY}`);
  if (!res.ok) throw new Error("Unable to get recipe details");
  const data = await res.json();
  return data;
}
export async function getSimilarRecipeData(id) {
  const res = await fetch(`${BASE_URL}/${id}/similar?apiKey=${API_KEY}`);
  if (!res.ok) throw new Error("Unable to get recipe details");
  const data = await res.json();
  return data;
}
