import { useModal } from "../contexts/modal.context";
import Backdrop from "./Backdrop";

function Modal({ title, content }) {
  const modal = useModal();

  const handleButtonClick = () => {
    modal.close();
  };

  return (
    <Backdrop>
      <article className="modal">
        <h3>{title}</h3>
        <div>{content}</div>
        <button onClick={handleButtonClick}>닫기</button>
      </article>
    </Backdrop>
  );
}

export default Modal;
