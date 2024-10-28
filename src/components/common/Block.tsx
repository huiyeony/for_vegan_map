import { memo } from "react";
import styled from "styled-components";

interface BlockProps {
  children?: React.ReactNode;
  height?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
const StyledBlock = styled.div<BlockProps>`
  height: ${(props) => props.height || "2rem"};
  width: 100%;
`;
function Block({ children, onClick, height }: BlockProps) {
  return <StyledBlock onClick={onClick}>{children}</StyledBlock>;
}
export default memo(Block);
