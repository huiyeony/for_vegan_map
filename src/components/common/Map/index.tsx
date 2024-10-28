import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { SelectInfoAtom } from "../../atoms/info";

interface MapProps {
  width?: string;
  height?: string;
  initMap?: (map: naver.maps.Map) => void;
}
function Map({ width, height, initMap }: MapProps) {
  const setAtom = useSetAtom(SelectInfoAtom);
  useEffect(() => {
    var mapOptions: naver.maps.MapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 11,
      pinchZoom: true,
    };
    const map = new naver.maps.Map("map", mapOptions);
    if (map && initMap) {
      initMap(map);
      naver.maps.Event.addListener(map, "click", () => {
        setAtom(null);
      });
    }
  }, []);

  return <div id="map" style={{ width: width, height: height }}></div>;
}
export default Map;
