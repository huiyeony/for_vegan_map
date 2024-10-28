import axios from "axios";
import Info from "../types/info";

export const getSearch = async (keyword: string) => {
  return await axios.get<{ message: string; data: Info[] }>(
    `https://nest-js-app-one.vercel.app/search?query=${keyword}`
  );
};
