import { useAtom, useAtomValue } from "jotai";
import { InfosAtom, SelectInfoAtom } from "../atoms/info";
import Marker from "../common/Marker";
import { MapAtom } from "../atoms/map";
import InfoWindow from "../common/InfoWindow";

interface MarkerContainerProps {
  type?: "home" | "upload";
  onsubmit?: () => void;
}
function MarkerContainer({ type, onsubmit }: MarkerContainerProps) {
  const [infos, setInfos] = useAtom(InfosAtom);
  const map = useAtomValue(MapAtom)!;
  const [selectInfo, setSelectInfo] = useAtom(SelectInfoAtom);
  if (!map || !infos) return <></>;
  console.log(infos);
  return (
    <>
      {infos?.map((info) => (
        <Marker
          key={info.id}
          map={map}
          position={info.position}
          content={"<div class='marker'/>"}
          onClick={() => {
            setSelectInfo(info);
            map.panTo(new naver.maps.LatLng(info.position));
          }}
        />
      ))}
      {selectInfo && (
        <Marker
          map={map}
          content={"<div class='marker select'/>"}
          position={selectInfo.position}
          onClick={() => {
            setSelectInfo(null);
          }}
        />
      )}
      {
        <InfoWindow
          map={map}
          info={selectInfo}
          onSubmit={type === "upload" && selectInfo ? onsubmit : undefined}
        />
      }
    </>
  );
}
export default MarkerContainer;
