import { useEffect, useRef, useState } from "react";
import "./App.css";
import PikachuImage from "./assets/pikachu.png";

function App() {
  const [state, setState] = useState({ direction: "", num: 0 });
  const pikachuDirectionRef = useRef("");
  const pikachuJumpRef = useRef("");
  const coordRef = useRef({ x: 0, y: 0, isWatchingLeft: false });
  const PIKACHU_WIDTH = 50;
  const PIKACHU_HEIGHT = 50;
  const MAX_X = 9;
  const MAX_Y = 9;

  const move = (direction, dx, dy) => {
    const nextX = coordRef.current.x + dx;
    const nextY = coordRef.current.y + dy;

    if (nextX < 0 || nextX > MAX_X) return;
    if (nextY < 0 || nextY > MAX_Y) return;

    setState((prev) => ({ direction: direction, num: prev.num + 1 }));
    coordRef.current.x += dx;
    coordRef.current.y += dy;
  };

  const changeDirection = (direction) => {
    if (coordRef.current.isWatchingLeft === (direction !== "left"))
      pikachuDirectionRef.current = direction;
    coordRef.current.isWatchingLeft = direction === "left";
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowUp":
        move("⬆️", 0, -1);
        break;
      case "ArrowDown":
        move("⬇️", 0, 1);
        break;
      case "ArrowRight":
        move("➡️", 1, 0);
        changeDirection("right");
        break;
      case "ArrowLeft":
        move("➡️", -1, 0);
        changeDirection("left");
        break;
      case " ":
        pikachuJumpRef.current = "jump";
        setState((prev) => ({ direction: "JUMP", num: prev.num + 1 }));
        setTimeout(() => {
          pikachuJumpRef.current = "";
          setState((prev) => ({ direction: "", num: prev.num }));
        }, 300);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="container">
      <div className="step">
        {state.direction} {state.num}
      </div>
      <div
        className="playground"
        style={{
          width: (MAX_X + 1) * PIKACHU_WIDTH,
          height: (MAX_Y + 1) * PIKACHU_HEIGHT,
        }}
      >
        <div className={`pikachu-container ${pikachuJumpRef.current}`}>
          <img
            className={`pikachu ${pikachuDirectionRef.current}`}
            style={{
              top: coordRef.current.y * PIKACHU_HEIGHT,
              left: coordRef.current.x * PIKACHU_WIDTH,
            }}
            width={PIKACHU_WIDTH}
            src={PikachuImage}
            alt="에비츄"
          />
        </div>
      </div>
    </div>
  );
}
export default App;
