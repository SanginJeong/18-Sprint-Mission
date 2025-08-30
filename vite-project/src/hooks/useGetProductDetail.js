import { useQuery } from "@tanstack/react-query";
import instance from "../api/axiosInstance";

const getProductDetail = ({ productId }) => {
  return instance.get(`products/${productId}`);
};

export const useGetProductDetailQuery = ({ productId }) => {
  return useQuery({
    queryKey: ["getProductDetail"],
    queryFn: () => getProductDetail({ productId }),
    staleTime: 300000,
    select: (response) => response.data,
  });
};
