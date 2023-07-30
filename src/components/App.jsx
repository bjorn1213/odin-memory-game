import { useState } from "react";

import "../style/App.css";
import Header from "./Header";
import PageContent from "./PageContent";

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
        <PageContent processIdClick={processIdClick} />
      </div>
    </>
  );
}

export default App;
