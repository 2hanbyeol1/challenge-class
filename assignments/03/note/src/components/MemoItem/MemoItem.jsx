import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { selectMemo } from "../../redux/slices/memos.slices";

const MemoWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 24px;
  border-radius: 4px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "rgb(255, 224, 127)" : "rgb(255, 255, 255)"};
`;
const Content = styled.h6`
  line-height: 1.15;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 7px;
  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;
`;
const Time = styled.time`
  font-size: 12px;
`;

function MemoItem({ id, content, time, isSelected }) {
  const dispatch = useDispatch();

  const handleMemoClicked = () => {
    dispatch(selectMemo(id));
  };

  return (
    <MemoWrapper $isSelected={isSelected} onClick={handleMemoClicked}>
      <Content>{content || "새로운 메모"}</Content>
      <Time>{time}</Time>
    </MemoWrapper>
  );
}

MemoItem.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

export default MemoItem;
