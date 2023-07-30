import { useEffect, useState } from "react";
import "../style/PageContent.css";
import getPokemonImageSrc from "../utility/getImageSrc";

function MemoryCard({ pokemonId, onClickCallback }) {
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    const src = getPokemonImageSrc(pokemonId);
    src.then((x) => setImgSrc(x));
  }, [pokemonId]);

  return (
    <div className="memory-card" onClick={onClickCallback}>
      <img src={imgSrc} alt="" />
    </div>
  );
}

function PageContent({ processIdClick, pokemonIds }) {
  function clickWrapper(id) {
    return function () {
      processIdClick(id);
    };
  }

  return (
    <div className="page-content">
      {pokemonIds.map((id) => {
        return (
          <MemoryCard
            onClickCallback={clickWrapper(id)}
            key={id}
            pokemonId={id}
          />
        );
      })}
    </div>
  );
}

export default PageContent;
