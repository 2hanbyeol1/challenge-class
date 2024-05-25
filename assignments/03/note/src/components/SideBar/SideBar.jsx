import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addMemo, removeMemo } from "../../redux/slices/memos.slices";
import Button from "../Button";
import MemoItem from "../MemoItem";

const SideBarContainer = styled.aside`
  display: grid;
  grid-template-columns: 1fr;
  border-right: 1px solid rgb(230, 230, 230);
  overflow-y: auto;
  align-content: flex-start;
`;
const ButtonGroup = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(230, 230, 230);
`;
const MemoList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 20px 12px;
  overflow-x: hidden;
`;

function SideBar() {
  const dispatch = useDispatch();
  const memos = useSelector((state) => state.memos);

  const handleCreateMemoButtonClicked = () => {
    dispatch(addMemo());
  };
  const handleDeleteMemoButtonClicked = () => {
    if (memos.length === 1)
      return alert("하나 이상의 메모는 남겨두어야 합니다.");
    dispatch(removeMemo());
  };

  const formatTime = (date) => {
    return date?.split(", ")[1];
  };

  return (
    <SideBarContainer>
      <ButtonGroup>
        <Button onClick={handleCreateMemoButtonClicked}>
          새 메모 작성하기
        </Button>
        <Button onClick={handleDeleteMemoButtonClicked}>삭제</Button>
      </ButtonGroup>
      <MemoList>
        {memos.map((memo) => (
          <MemoItem
            key={memo.id}
            id={memo.id}
            content={memo.content}
            time={formatTime(memo.date)}
            isSelected={memo.isSelected}
          />
        ))}
      </MemoList>
    </SideBarContainer>
  );
}

export default SideBar;
