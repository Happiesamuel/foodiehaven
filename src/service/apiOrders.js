import supabase from "./supabase";

export async function getOrders(id) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("custom", id);
  if (error) throw new Error("Failed to get orders");
  return data;
}

export async function deleteOrders(id) {
  let query = supabase.from("orders").delete();
  if (Array.isArray(id)) query = query.in("orderId", id);
  else query = query.eq("orderId", id);

  const { error, data } = await query;

  if (error) throw new Error("Unable to delete");
  return data;
}
