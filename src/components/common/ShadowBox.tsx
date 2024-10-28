import { memo } from "react";
import styled from "styled-components";

interface ShadowBoxProps {
  children?: React.ReactNode;
}
const StyledShadowBox = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  width: 100%;
  max-width: 400px;

  display: flex;
  align-items: center;

  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  border-radius: 10px;

  padding: 6px 8px;
  z-index: 102;
`;
function ShadowBox({ children }: ShadowBoxProps) {
  return <StyledShadowBox>{children}</StyledShadowBox>;
}
export default ShadowBox;
