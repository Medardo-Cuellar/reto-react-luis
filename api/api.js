const API_URL = "https://desafio-backend-luis.onrender.com";

export async function login(email, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const json = await response.json();
  return json.data.token;
}

export async function getUsers() {
  const token = window.localStorage.getItem("token");
  const response = await fetch(`${API_URL}/users`,
    {
      method: "GET",
      authorization: {authorization: `Bearer ${token}`},
      
    }//no se le pone headers porque es metodo get
  );
  const json = await response.json();
  return json.users;
}


export async function getPosts() {
    const token = window.localStorage.getItem("token");
    const response = await fetch(`${API_URL}/posts`,
      {
        method: "GET",
        authorization: {authorization: `Bearer ${token}`},
        
      }//no se le pone headers porque es metodo get
    );
    const json = await response.json();
    return json.posts;
  }

export async function getProductById(id) {
  const token = window.localStorage.getItem("token");
  const response = await fetch(`${API_URL}/products/${id}`,
    {
      method: "GET",
      authorization: {authorization: `Bearer ${token}`},
    }
  );
  const json = await response.json();
  return json;
}

export async function createProduct(product) {
  const token = window.localStorage.getItem("token");
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(product),
  });
  const json = await response.json();
  return json;
}

export async function updateProduct(id, product) {
    const token = window.localStorage.getItem("token");
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(product),
    });
    const json = await response.json();
    return json;
}