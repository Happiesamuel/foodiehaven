import supabase from "./supabase";

export async function addBookmark(bookmark) {
  const { image, id, description, price, title } = bookmark;
  const newBookmark = { image, description, price, title, bookmarkId: id };
  const { data, error } = await supabase
    .from("bookmark")
    .insert([newBookmark])
    .select();
  if (error) throw new Error("Unable to bookmark item");
  return data;
}
export async function getBookmark() {
  const { data, error } = await supabase.from("bookmark").select("*");
  if (error) throw new Error("Unable to bookmark item");
  return data;
}
export async function deleteBookmark(id) {
  const { error, data } = await supabase
    .from("bookmark")
    .delete()
    .eq("bookmarkId", id);
  if (error) throw new Error("Unable to delete");
  return data;
}
