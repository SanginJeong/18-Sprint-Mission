import { instance } from "./instance";
import { TodoItem } from "@/types/global";

interface GetTodosRequest {
  page?: number;
  pageSize?: number;
}

export interface GetTodosResponse {
  items: TodoItem[];
}

export const getTodos = async ({
  page = 1,
  pageSize = 10,
}: GetTodosRequest = {}): Promise<GetTodosResponse> => {
  return instance.get("/items", { params: { page, pageSize } });
};
