import { memo, useCallback } from "react";
import styled from "styled-components";

interface InputProps {
  children?: React.ReactNode;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
}
const StyledInput = styled.input<InputProps>`
  display: inline-block;
  width: 100%;
  min-height: 2rem;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  font-size: 17px;
`;
function Input({ name, value, children, onChange, onSubmit }: InputProps) {
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!onSubmit || e.nativeEvent.isComposing) return;
      if (e.key === "Enter") onSubmit();
    },
    [onSubmit]
  );
  return (
    <StyledInput
      name={name}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    >
      {children}
    </StyledInput>
  );
}
export default Input;
