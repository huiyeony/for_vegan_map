import Info from "../../../types/info";
import { useEffect, useState } from "react";
import "./index.css";
interface InfowWindowProps {
  map: naver.maps.Map;
  info: Info | null;
  onSubmit?: () => void;
}

function InfoWindow({ map, info, onSubmit }: InfowWindowProps) {
  const [infoWindow, setInfoWindow] = useState<naver.maps.InfoWindow | null>(
    null
  );
  useEffect(() => {
    const options: naver.maps.InfoWindowOptions = {
      content: "",
      backgroundColor: "transparent",
      pixelOffset: new naver.maps.Point(10, -30),
      borderWidth: 0,
      disableAnchor: true,
    };
    const window = new naver.maps.InfoWindow(options);
    setInfoWindow(window);
    window.setMap(null);
  }, []);
  useEffect(() => {
    if (info) {
      const content = InfoWindowContentMaker(info, onSubmit);

      if (!map || !infoWindow) return;
      infoWindow.setContent(content);
      infoWindow.open(map, info.position);
    } else {
      infoWindow?.close();
    }
  }, [map, info]);

  return null;
}
function InfoWindowContentMaker(selectInfo: Info, onSubmit?: () => void) {
  const infoBox = document.createElement("div");
  infoBox.className = "infoBox";

  const infoPlace = document.createElement("div");
  infoPlace.className = "infoPlaceName";
  infoPlace.innerHTML = selectInfo.placeName;
  infoBox.appendChild(infoPlace);

  const infoAddress = document.createElement("div");
  infoAddress.className = "infoAddressName";
  infoAddress.innerHTML = selectInfo.addressName;
  infoBox.appendChild(infoAddress);

  if (onSubmit) {
    const infoButton = document.createElement("button");
    infoButton.innerHTML = "장소 등록";
    infoButton.className = "infoButton";
    infoButton.onclick = onSubmit;
    infoBox.appendChild(infoButton);
  }
  return infoBox;
}
export default InfoWindow;
