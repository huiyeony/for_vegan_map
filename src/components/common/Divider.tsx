import { memo } from "react";
import styled from "styled-components";

interface DividerProps {
  width?: string;
  height?: string;
}
const StyledDivider = styled.div<DividerProps>`
  width: ${(props) => props.width || "1px"};
  height: ${(props) => props.height || "20px"};
  padding: 0px;
  margin: 0px 8px;
  opacity: 0.2;
  background: #707070;
`;
function Divider({ width, height }: DividerProps) {
  return <StyledDivider></StyledDivider>;
}
export default memo(Divider);
