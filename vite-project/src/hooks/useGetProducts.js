import { useQuery } from "@tanstack/react-query";
import instance from "../api/axiosInstance";

const getProducts = ({ page = 1, orderBy = "recent", pageSize = 10 }) => {
  return instance.get("/products", {
    params: { page, orderBy, pageSize },
  });
};

export const useGetProductsQuery = ({ page, orderBy, pageSize }) => {
  return useQuery({
    queryKey: ["getProducts", page, pageSize, orderBy],
    queryFn: () => getProducts({ page, orderBy, pageSize }),
    staleTime: 300000,
    select: (response) => response.data,
  });
};
