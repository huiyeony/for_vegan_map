import { useQuery } from "react-query";
import MapContainer from "../../components/MapContainer";
import Navigation from "../../components/Navigation";
import axios from "axios";
import Info from "../../types/info";
import { useAtom } from "jotai";
import { InfosAtom } from "../../components/atoms/info";
import MarkerContainer from "../../components/MarkerContainer";
import { getInfos } from "../../apis/info";
export default function Home() {
  const [infos, setInfos] = useAtom(InfosAtom);
  const { status } = useQuery("infos", getInfos, {
    select: (result) => result.data,
    onSuccess: (data) => {
      console.log(data.message);
      setInfos(data.data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
  if (status === "loading") return <></>;
  return (
    <>
      <Navigation type="home" />
      <MapContainer />
      <MarkerContainer type="home" />
    </>
  );
}
