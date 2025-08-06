import { instance } from "./axiosInstance";

export const getProduct = async ({ page, orderBy, pageSize }) => {
  try {
    const { data } = await instance.get("/products", {
      page,
      orderBy,
      pageSize,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
