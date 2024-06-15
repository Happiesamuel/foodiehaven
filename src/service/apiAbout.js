export async function getFoodRecipies() {
  const res = await fetch("https://dummyjson.com/recipes?limit=50");
  if (!res.ok) throw new Error("recipies couldn't be fetched");
  const data = await res.json();
  return data.recipes;
}
