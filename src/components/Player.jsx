import { useRef, useState } from "react";

export default function Player() {
  const nameEntered = useRef();
  const [playerName, setPlayerName] = useState("");

  function handleClick() {
    setPlayerName(nameEntered.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "unknown entity"}</h2>

      <p>
        <input ref={nameEntered} type="text" />

        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
