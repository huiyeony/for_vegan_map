import styled from "styled-components";
import Info from "../../types/info";
import ResultBox from "../common/ResultBox";
import { useAtom } from "jotai";
import { InfosAtom, SelectInfoAtom } from "../atoms/info";
import { useCallback } from "react";
import { MapAtom } from "../atoms/map";
import { info } from "console";

const StyledSearchBoard = styled.div`
  background: #ffffff;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  max-width: 436px;

  z-index: 101;

  .search_board_wrapper {
    width: 100%;
    max-width: 436px;

    padding: 0px;
    margin: 0px;
    padding-top: 91px;

    overflow-y: auto;
  }
`;

function SearchBoard() {
  const [infos, setInfos] = useAtom(InfosAtom);
  const [selectInfo, setSelectInfo] = useAtom(SelectInfoAtom);
  const [map] = useAtom(MapAtom);
  const onclick = (info: Info) => {
    setSelectInfo(info);
    map?.panTo(new naver.maps.LatLng(info.position));
  };

  return (
    <StyledSearchBoard>
      <div className="search_board_wrapper">
        {infos?.map((info) => (
          <ResultBox key={info.id} info={info} onClick={onclick} />
        ))}
      </div>
    </StyledSearchBoard>
  );
}
export default SearchBoard;
