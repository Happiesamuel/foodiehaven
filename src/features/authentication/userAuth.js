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
  if (Object.keys(userObj).at(0) !== "avatar") {
    if (Object.keys(userObj).at(0) === "username")
      userData = { data: { username: Object.values(userObj).at(0) } };
    if (Object.keys(userObj).at(0) === "email")
      userData = { email: Object.values(userObj).at(0) };
    if (Object.keys(userObj).at(0) === "password")
      userData = { password: Object.values(userObj).at(0) };
    const { data, error } = await supabase.auth.updateUser(userData);
    if (error) throw new Error(error.message);
    return data?.user;
  } else {
    const fileName = `avatar-${Math.random()}`;
    userData = userObj;
    console.log(userData.avatar);
    const { error } = await supabase.storage
      .from("avatar")
      .upload(fileName, userData.avatar);
    if (error) throw new Error(error.message);

    const { data, error: error2 } = await supabase.auth.updateUser({
      data: {
        avatar: `https://xceyclksptcinpzjtque.supabase.co/storage/v1/object/public/avatar/${fileName}`,
      },
    });
    if (error2) throw new Error(error2.message);
    return data;
  }
}
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  return data?.user;
}
