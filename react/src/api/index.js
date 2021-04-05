import axios from "axios";

const api = ""

export const logIn = async (username, password) => {
  const res = await fetch("/login", {
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
  console.log(res)
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

export const edit_product = async (product) => {
  const status = await axios
    .post(api + "/admin/productEdit/" + product["book_id"], product, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': "Bearer "+localStorage.getItem("neo-user-token")
      },
    })
    .then((res) => res.data)
    .catch((err) => ({ error: true }));
  return status;
};

export const add_Product = async (product) => {
  const status = await axios
    .post(api + "/admin/addProduct", product, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': "Bearer "+localStorage.getItem("neo-user-token")
      },
    })
    .then((res) => res.data)
    .catch((err) => ({ error: true }));
  return status;
};

export const delete_product = async (productId) => {
  const status = await axios
    .get(api + "/admin/delete/" + productId, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': "Bearer "+localStorage.getItem("neo-user-token")
      },
    })
    .then((res) => res.data)
    .catch((err) => ({ error: true }));
  return status;
};

export const getAllProducts = async () => {
  const status = await axios
    .get(api + "/home", {
      headers:{
        "Content-Type": "application/json",
        'Authorization': "Bearer "+localStorage.getItem("neo-user-token")
      },
    })
    .then((res) => res.data)
    .catch((err) => ({ error: true }));
  return status;
};

export const getAllAdminData = async () => {
  var products, orders;
  await axios
    .all([
      axios.get(api + "/home", { headers:{
        "Content-Type": "application/json",
        'Authorization': "Bearer "+localStorage.getItem("neo-user-token")
      } }),
      axios.get(api + "/admin/orders", { headers:{
        "Content-Type": "application/json",
        'Authorization': "Bearer "+localStorage.getItem("neo-user-token")
      } }),
    ])
    .then(
      axios.spread((data1, data2) => {
        products = data1;
        orders = data2;
      })
    )
    .catch((err) => ({ error: true }));
  return { products, orders };
};

export const logout = () => {
  localStorage.removeItem("neo-user");
  localStorage.removeItem("neo-admin");
  localStorage.removeItem("neo-user-token");
};

export const getAllUserData = async () => {
  var products, cart, orders;
  await axios
    .all([
      axios.get(api + "/home", { headers: {
        "Content-Type": "application/json",
        'Authorization': "Bearer "+localStorage.getItem("neo-user-token")
      } }),
      axios.get(`${api}/cart/${localStorage.getItem("neo-user-id")}`, {
        headers: {
          "Content-Type": "application/json",
          'Authorization': "Bearer "+localStorage.getItem("neo-user-token")
        },
      }),
      axios.get(api + "/orders", {
        headers: {
          "Content-Type": "application/json",
          'Authorization': "Bearer "+localStorage.getItem("neo-user-token"),
          id: localStorage.getItem("neo-user-id")
        }
      }),
    ])
    .then(
      axios.spread((data1, data2, data3) => {
        products = data1;
        cart = data2;
        orders = data3;
      })
    );
  return { products, cart, orders };
};

export const addItemToCart = async (book_id, quantity) => {
  const status = await axios
    .post(`${api}/home/${book_id}?quantity=${quantity}`, "", {
      headers:{
        "Content-Type": "application/json",
        'Authorization': "Bearer "+localStorage.getItem("neo-user-token")
      }
    })
    .then((res) => res.data)
    .catch((err) => ({ error: true }));
  return status;
};

export const placeDirectOrder = async (order) => {
  const status = await axios
    .post(api + "/placeOrder", order, { headers:{
      "Content-Type": "application/json",
      'Authorization': "Bearer "+localStorage.getItem("neo-user-token"),
      id: localStorage.getItem("neo-user-id")
    } })
    .then((res) => res.data)
    .catch((err) => ({ error: true }));
  return status;
};

export const saveOrders = async (cart) => {
  const orders = await axios
    .post(api + "/saveOrder", cart, { headers: {
      "Content-Type": "application/json",
      'Authorization': "Bearer "+localStorage.getItem("neo-user-token"),
      id: localStorage.getItem("neo-user-id")
    } })
    .then((res) => res.data)
    .catch((err) => ({ error: true }));
  return orders;
};

export const deleteItemFromCart = async (book_id) => {
  const status = await axios
    .post(api + "/cart/delete", "", { headers:{
      "Content-Type": "application/json",
      'Authorization': "Bearer "+localStorage.getItem("neo-user-token")
    }, params: { bid: book_id } })
    .then((res) => res.data)
    .catch((err) => ({ error: true }));
  return status;
};

export const getOrdersOfUser = async () => {
  const status = await axios.get("/orders", { headers:{
    "Content-Type": "application/json",
    'Authorization': "Bearer "+localStorage.getItem("neo-user-token"),
    id: localStorage.getItem("neo-user-id")
  } }).then(res => res.data).catch(err => ({ error: true }))
  return status;
}