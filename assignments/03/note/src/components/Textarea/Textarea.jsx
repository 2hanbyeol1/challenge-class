import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateMemo } from "../../redux/slices/memos.slices";

function Textarea({ selectedMemo }) {
  const dispatch = useDispatch();

  const handleTextareaChange = (e) => {
    const payload = {
      memoId: selectedMemo.id,
      newContent: e.target.value,
    };

    dispatch(updateMemo(payload));
  };
  return <Textarea onChange={handleTextareaChange} />;
}

Textarea.propTypes = {
  selectedMemo: PropTypes.object,
};

export default Textarea;
