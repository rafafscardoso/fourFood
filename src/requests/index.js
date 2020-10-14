import axios from "axios";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/fourFoodA";

export const login = async (body) => {
  const response = await axios.post(`${baseUrl}/login`, body);
  return response.data;
}

export const signUp = async (body) => {
  const response = await axios.post(`${baseUrl}/signup`, body);
  return response.data;
}

export const addAddress = async (body) => {
  const token = window.localStorage.getItem("token");
  const response = await axios.put(`${baseUrl}/address`, body, {
    headers: {
      auth: token
    }
  });
  return response.data;
}

export const getFullAddress = async () => {
  const token = window.localStorage.getItem("token");
  const response = await axios.get(`${baseUrl}/profile/address`, {
    headers: {
      auth: token
    }
  });
  return response.data;
}

export const getProfile = async () => {
  const token = window.localStorage.getItem("token");
  const response = await axios.get(`${baseUrl}/profile`, {
    headers: {
      auth: token
    }
  });
  return response.data;
}

export const updateProfile = async (body) => {
  const token = window.localStorage.getItem("token");
  const response = await axios.put(`${baseUrl}/profile`, body, {
    headers: {
      auth: token
    }
  });
  return response.data
}

export const getRestaurants = async () => {
  const token = window.localStorage.getItem("token");
  const response = await axios.get(`${baseUrl}/restaurants`, {
    headers: {
      auth: token
    }
  });
  return response.data
}

export const getRestaurantDetail = async (restaurantId) => {
  const token = window.localStorage.getItem("token");
  const response = await axios.get(`${baseUrl}/restaurants/${restaurantId}`, {
    headers: {
      auth: token
    }
  });
  return response.data;
}

export const placeOrder = async (body, restaurantId) => {
  const token = window.localStorage.getItem("token");
  const response = await axios.post(`${baseUrl}/restaurants/${restaurantId}/order`, body, {
    headers: {
      auth: token
    }
  });
  return response.data;
}

export const getActiveOrder = async () => {
  const token = window.localStorage.getItem("token");
  const response = await axios.get(`${baseUrl}/active-order`, {
    headers: {
      auth: token
    }
  });
  return response.data;
}

export const getOrdersHistory = async () => {
  const token = window.localStorage.getItem("token");
  const response = await axios.get(`${baseUrl}/orders/history`, {
    headers: {
      auth: token
    }
  });
  return response.data;
}

