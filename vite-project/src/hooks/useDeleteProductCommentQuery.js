import { useMutation, useQueryClient } from "@tanstack/react-query";
import instance from "../api/axiosInstance";

const deleteProductComment = ({ commentId }) => {
  return instance.delete(`comments/${commentId}`);
};

export const useDeleteProductCommentQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProductComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["getProductComments"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
