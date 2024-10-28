import { useCallback, useState } from "react";
import ShadowBox from "./common/ShadowBox";
import Span from "./common/Span";
import Divider from "./common/Divider";
import Block from "./common/Block";
import Input from "./common/Input";
import Button from "./common/Button";
import { FiArrowLeft } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { useAtom } from "jotai";
import { InfosAtom, SelectInfoAtom } from "./atoms/info";
import { useQuery } from "react-query";
import { getSearch } from "../apis/search";
import { MapAtom } from "./atoms/map";

interface NavigationProps {
  type: "home" | "upload";
}
function Navigation({ type }: NavigationProps) {
  const [value, setValue] = useState("");
  const [keyword, setKeyword] = useState("");

  const [, setSelectInfo] = useAtom(SelectInfoAtom);
  const [, setInfos] = useAtom(InfosAtom);
  const [map] = useAtom(MapAtom);
  const { status } = useQuery(["search", keyword], () => getSearch(keyword), {
    enabled: !!keyword,
    select: (result) => result.data.data,
    onSuccess: (infos) => {
      setInfos(infos);
      setSelectInfo(null);

      if (!map || !infos || infos.length === 0) return;
      const bounds = new naver.maps.LatLngBounds(
        new naver.maps.LatLng(0, 0),
        new naver.maps.LatLng(0, 0)
      );
      infos.map((info) => {
        bounds.extend(info.position);
      });
      map.panToBounds(bounds);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(() => {
    setKeyword(value);
  }, [value]);
  const onChangeSelect = useCallback(() => {
    setSelectInfo(null);
    setValue("");
  }, [setSelectInfo]);

  if (status === "loading") return <></>;
  return (
    <>
      <ShadowBox>
        {type === "upload" ? (
          <Button type="link" url="/upload" onClick={onChangeSelect}>
            <FiArrowLeft size={20} />
          </Button>
        ) : (
          <Button type="link" url="/">
            <Span size="title">mern</Span>
          </Button>
        )}

        <Divider />
        {type === "home" ? (
          <Block />
        ) : (
          <Button type="link" url="/upload">
            <Input value={value} onChange={onChange} onSubmit={onSubmit} />
          </Button>
        )}
        {type === "home" ? (
          <Button type="link" url="/upload">
            <GoPlus size={20} />
          </Button>
        ) : (
          <Button type="button" onClick={onSubmit}>
            <FaSearch size={20} />
          </Button>
        )}
      </ShadowBox>
    </>
  );
}
export default Navigation;
