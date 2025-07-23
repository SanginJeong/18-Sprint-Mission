import axios from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProduct = async (params) => {
  try {
    const { data } = await instance.get("/products", { params });
    console.log(data);
    return data.list;
  } catch (error) {
    console.error(error);
  }
};
