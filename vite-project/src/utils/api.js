import axios from "axios";

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const instance = axios.create({
  baseURL: VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProduct = async (params) => {
  try {
    const { data } = await instance.get("/products", { params });
    console.log(data);
    return [data.list, data.totalCount];
  } catch (error) {
    console.error(error);
  }
};
