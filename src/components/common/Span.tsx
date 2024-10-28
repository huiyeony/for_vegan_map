import { memo } from "react";
import styled from "styled-components";

interface SpanProps {
  color?: string;
  size?: "normal" | "small" | "title";
  children?: React.ReactNode;
}
const StyledSpan = styled.div<SpanProps>`
  color: ${(props) => props.color || "black"};
  &.normal {
    font-size: 0.8rem;
  }
  &.small {
    font-size: 1rem;
  }
  &.title {
    font-size: 1rem;
    font-weight: bold;
  }
`;
function Span({ color, size, children }: SpanProps) {
  return (
    <StyledSpan color={color} className={size}>
      {children}
    </StyledSpan>
  );
}
export default memo(Span);
