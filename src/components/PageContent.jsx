import "../style/PageContent.css";

function MemoryCard({ pokemonId }) {
  return <div className="memory-card"> asd {pokemonId}</div>;
}

function PageContent() {
  const idArray = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="page-content">
      {idArray.map((id) => {
        return <MemoryCard key={id} pokemonId={id} />;
      })}
    </div>
  );
}

export default PageContent;
