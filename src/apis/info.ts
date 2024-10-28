import axios from "axios";
import Info from "../types/info";

export const getInfos = async () => {
  return await axios.get("https://nest-js-app-one.vercel.app/infos");
};
export const postInfo = async (info: Info) => {
  return await axios.post<{}>("https://nest-js-app-one.vercel.app/info", info);
};
