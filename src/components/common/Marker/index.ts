import { useEffect } from "react";
import "./index.css";

interface MarkerProps {
  map: naver.maps.Map;
  position: {
    lat: number;
    lng: number;
  };
  content: string;
  onClick: () => void;
}

function Marker({ map, position, content, onClick }: MarkerProps) {
  useEffect(() => {
    var markerOptions = {
      map,
      position: new naver.maps.LatLng(position),
      icon: content,
    };
    const marker = new naver.maps.Marker(markerOptions);
    naver.maps.Event.addListener(marker, "click", onClick);
    marker.setMap(map);
  }, [content, map, onClick, position]);

  return null;
}
export default Marker;
