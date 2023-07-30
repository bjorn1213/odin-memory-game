import "../style/Header.css";

function PageTitle() {
  return <h1 className="page-title">Memory game!</h1>;
}

function ScoreDisplay({ score, bestScore }) {
  return (
    <div className="score-container">
      <p className="score-p">Current score: {score}</p>
      <p className="score-p">Best score: {bestScore}</p>
    </div>
  );
}

function Header({ score, bestScore }) {
  return (
    <div className="header">
      <PageTitle />
      <ScoreDisplay score={score} bestScore={bestScore} />
    </div>
  );
}

export default Header;
