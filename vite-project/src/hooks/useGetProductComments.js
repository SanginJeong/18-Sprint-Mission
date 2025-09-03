import { useQuery } from "@tanstack/react-query";
import instance from "../api/axiosInstance";

const getProductComments = ({ productId, limit, cursor }) => {
  return instance.get(`products/${productId}/comments`, {
    params: { limit, cursor },
  });
};

export const useGetProductCommentsQuery = ({ productId, limit, cursor }) => {
  return useQuery({
    queryKey: ["getProductComments", productId, limit],
    queryFn: () => getProductComments({ productId, limit, cursor }),
    staleTime: 300000,
    select: (response) => response.data,
  });
};
