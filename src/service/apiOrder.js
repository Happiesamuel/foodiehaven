import supabase from "./supabase";

export async function getOrder(id) {
  const orderId = +id;
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("orderId", orderId);
  if (error) throw new Error("Failed to get your order");
  return data;
}

export async function addOrder(order) {
  const { address, cart, firstname, orderId, phone, custom } = order;
  const newOrder = {
    address,
    cart,
    firstname,
    orderId,
    phone,
    custom,
  };

  const { data, error } = await supabase
    .from("orders")
    .insert([newOrder])
    .select();

  if (error) throw new Error("Unable to process your order ");
  return data;
}
