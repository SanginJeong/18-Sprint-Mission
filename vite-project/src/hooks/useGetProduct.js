import { instance } from "../utils/api";

export const useGetProduct = async (params) => {
  try {
    const { data } = await instance.get("/products", { params });
    console.log(data);
    return [data.list, data.totalCount];
  } catch (error) {
    console.error(error);
  }
};
