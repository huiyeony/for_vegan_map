import styled from "styled-components";
import Info from "../../../types/info";
import Span from "../Span";

interface ResultBoxProps {
  info: Info;
  onClick: (info: Info) => void;
}
const StyledResultBox = styled.div`
  width: 100%;
  padding: 20px 0px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  gap: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .placeName {
    padding: 0px 15px;
    margin: 0px;
  }
  .addressName {
    padding: 0px 15px;
    margin: 0px;
  }
`;

function ResultBox({ info, onClick }: ResultBoxProps) {
  return (
    <StyledResultBox
      onClick={() => {
        onClick(info);
      }}
    >
      <div className="placeName">
        <Span size="title">{info?.placeName}</Span>
      </div>
      <div className="addressName">
        <Span size="normal" color="gray">
          {info?.addressName}
        </Span>
      </div>
    </StyledResultBox>
  );
}
export default ResultBox;
