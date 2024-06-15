export async function getCustomersData() {
  const res = await fetch("https://dummyjson.com/users?limit=208");
  if (!res.ok) throw new Error("users couldn't be fetched");
  const data = await res.json();
  return data.users;
}
