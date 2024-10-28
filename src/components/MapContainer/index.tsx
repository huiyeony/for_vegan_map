import { useSetAtom } from "jotai";
import { MapAtom } from "../atoms/map";
import Map from "../common/Map/index";
function MapContainer() {
  const setMapAtom = useSetAtom(MapAtom);
  const initMap = (map: naver.maps.Map) => {
    setMapAtom(map);
  };
  return (
    <>
      <Map width="100%" height="100%" initMap={initMap} />
    </>
  );
}
export default MapContainer;
