import { instance } from "../utils/api";

export const useGetProduct = async (params) => {
  try {
    const { data } = await instance.get("/products", { params });
    return data;
  } catch (error) {
    console.error(error);
  }
};
