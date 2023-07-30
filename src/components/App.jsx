import { useState } from "react";

import "../style/App.css";
import Header from "./Header";
import PageContent from "./PageContent";

import shuffle from "../utility/shuffle";

const pokemonIds = [];
const pokemonCount = 50;

for (let i = 0; i < pokemonCount; i++) {
  let nextValue = Math.ceil(Math.random() * 1011);
  while (pokemonIds.includes(nextValue)) {
    nextValue = Math.ceil(Math.random() * 1011);
  }
  pokemonIds.push(nextValue);
}

function App() {
  const [clickedIds, setClickedIds] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function processIdClick(clickedId) {
    if (clickedIds.includes(clickedId)) {
      setClickedIds([]);
      setScore(0);
    } else {
      const clickedIdsCopy = [...clickedIds];
      clickedIdsCopy.push(clickedId);
      setClickedIds(clickedIdsCopy);
      setScore(score + 1);
      setBestScore(Math.max(score + 1, bestScore));
    }
  }

  return (
    <>
      <div className="app-div">
        <Header score={score} bestScore={bestScore} />
        <PageContent
          processIdClick={processIdClick}
          pokemonIds={shuffle(pokemonIds)}
        />
      </div>
    </>
  );
}

export default App;
