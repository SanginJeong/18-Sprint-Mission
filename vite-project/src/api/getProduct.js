import { instance } from "./axiosInstance";

export const getProduct = async (params) => {
  try {
    const { data } = await instance.get("/products", { params });
    return data;
  } catch (error) {
    console.error(error);
  }
};
