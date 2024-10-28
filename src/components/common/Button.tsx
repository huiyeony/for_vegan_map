import { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ButtonProps {
  children?: React.ReactNode;
  type?: "link" | "button";
  url?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const StyledButton = styled.button`
  background: none;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
function Button({ children, type = "button", onClick, url }: ButtonProps) {
  const RealLink = (
    <StyledButton onClick={onClick}>
      <Link to={url!}>{children}</Link>
    </StyledButton>
  );
  const RealButton = <StyledButton onClick={onClick}>{children}</StyledButton>;
  return type === "link" && url != null ? RealLink : RealButton;
}
export default memo(Button);
