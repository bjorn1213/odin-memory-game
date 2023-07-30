import "../style/Header.css";

function PageTitle() {
  return <h1 className="page-title">Memory game!</h1>;
}

function ScoreDisplay() {
  const curScore = 0;
  const bestScore = 10;

  return (
    <div className="score-container">
      <p className="score-p">Current score: {curScore}</p>
      <p className="score-p">Best score: {bestScore}</p>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <PageTitle />
      <ScoreDisplay />
    </div>
  );
}

export default Header;
