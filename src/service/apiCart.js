import supabase from "./supabase";

export async function getCart() {
  const { data, error } = await supabase.from("cart").select("*");
  if (error) throw new Error("Failed to get your cart");
  return data;
}

export async function addToCart(recipe) {
  const { image, title, bookmarkId, price, quantity } = recipe;
  const newCart = { image, title, price, cartId: bookmarkId, quantity };
  console.log(quantity);
  const { data, error } = await supabase
    .from("cart")
    .insert([newCart])
    .select();
  if (error) throw new Error("unable to add item to cart");
  return data;
}

export async function deleteCart(id) {
  console.log(id);
  const { error, data } = await supabase.from("cart").delete().eq("cartId", id);
  if (error) throw new Error("Unable to delete");
  return data;
}
