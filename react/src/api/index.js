import api from "./api";

export const logIn = async (username, password) => {
  const res = await fetch(api + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => ({ error: true }));
  return res;
};

export const signUp = async (email, username, mobilenumber, password) => {
  const res = await fetch(api + "/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      username,
      mobilenumber,
      password,
    }),
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => ({ error: true }));
  return res;
};
