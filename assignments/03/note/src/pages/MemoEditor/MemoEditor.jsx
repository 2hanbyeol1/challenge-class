import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Textarea from "../../components/Textarea";

const EditorSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const EditorHeader = styled.header`
  width: 100%;
  margin-bottom: 24px;
  text-align: center;
`;
const DateTime = styled.time`
  font-size: 10px;
  color: rgb(128, 128, 128);
`;

function MemoEditor() {
  const textareaRef = useRef();
  const memos = useSelector((state) => state.memos);
  const selectedMemo = memos.find((memo) => memo.isSelected);

  useEffect(() => {
    textareaRef.current.focus();
    textareaRef.current.value = selectedMemo.content;
  }, [selectedMemo]);

  const getDate = (date) => {
    const dates = date.split(", ");
    return `${dates[0]}, ${dates[1]}`;
  };

  return (
    <EditorSection>
      <EditorHeader>
        <DateTime>{getDate(selectedMemo.date)}</DateTime>
      </EditorHeader>
      <Textarea selectedMemo={selectedMemo} />
    </EditorSection>
  );
}

export default MemoEditor;
