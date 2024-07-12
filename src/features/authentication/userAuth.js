import supabase from "../../service/supabase";

export async function LoginApi(loginData) {
  const { password, email } = loginData;
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function logOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function SignupApi(signupData) {
  const { username, email, password } = signupData;
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        username,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

export async function updateUser(userObj) {
  let userData;
  if (Object.keys(userObj).at(0) === "username")
    userData = { data: { username: Object.values(userObj).at(0) } };
  if (Object.keys(userObj).at(0) === "email")
    userData = { email: Object.values(userObj).at(0) };
  if (Object.keys(userObj).at(0) === "password")
    userData = { password: Object.values(userObj).at(0) };
  console.log(userData);
  const { data, error } = await supabase.auth.updateUser(userData);
  if (error) throw new Error(error.message);
  console.log(data);
  return data?.user;
}
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  return data?.user;
}
