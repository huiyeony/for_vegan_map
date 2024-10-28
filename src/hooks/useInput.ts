import { useCallback, useState } from "react";

function useInput(initValue: string) {
  const [state, setState] = useState(initValue);
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setState(value);
  }, []);
  return { state, onChange };
}
export default useInput;
