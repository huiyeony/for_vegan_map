import { useAtom } from "jotai";
import MapContainer from "../../components/MapContainer";
import MarkerContainer from "../../components/MarkerContainer";
import Navigation from "../../components/Navigation";
import SearchBoard from "../../components/SearchBoard";
import { useMutation } from "react-query";
import { postInfo } from "../../apis/info";
import Info from "../../types/info";
import { SelectInfoAtom } from "../../components/atoms/info";
import { AxiosError } from "axios";

export default function Upload() {
  const { mutate } = useMutation(postInfo, {
    onSuccess: (result) => alert("데이터 등록됨"),
    onError: (error: AxiosError) => {
      const errStatus = error.status;
      console.error(error);
    },
  });
  const [selectInfo, setSelectInfo] = useAtom(SelectInfoAtom);
  const onSubmit = () => {
    if (!selectInfo) return;
    mutate(selectInfo);
  };

  return (
    <>
      <Navigation type="upload" />
      <SearchBoard />
      <MapContainer />
      <MarkerContainer type="upload" onsubmit={onSubmit} />
    </>
  );
}
