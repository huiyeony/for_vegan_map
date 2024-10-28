import { atom } from "jotai";
import Info from "../../types/info";

const SelectInfoAtom = atom<Info | null>(null);
const InfosAtom = atom<Info[] | null>(null);
export { SelectInfoAtom, InfosAtom };
