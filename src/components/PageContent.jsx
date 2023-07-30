import { useEffect, useState } from "react";
import "../style/PageContent.css";
import getPokemonImageSrc from "../utility/getImageSrc";

function MemoryCard({ pokemonId }) {
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    const src = getPokemonImageSrc(pokemonId);
    src.then((x) => setImgSrc(x));
  }, [pokemonId]);

  return (
    <div className="memory-card">
      <img src={imgSrc} alt="" />
    </div>
  );
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
