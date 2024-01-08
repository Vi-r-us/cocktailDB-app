import React from "react";
import "./cocktailList.css";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import { getRandomImageStyleType } from "../../utils";

const CocktailList = () => {
  const { cocktails } = useGlobalContext();
  return (
    <section className="cocktails-list">
      {cocktails &&
        cocktails.map((cocktail) => {
          const { idDrink, strDrink, strDrinkThumb } = cocktail;
          const imageStyle = getRandomImageStyleType();
          
          return (
            <article className="cocktail flex" direction="col" key={idDrink}>
              <Link to={`/cocktail/${idDrink}`}>
                <div className={imageStyle}>
                  <img src={strDrinkThumb} alt="Drink Thumbnail" />
                </div>
              </Link>
              <h2 className="cocktail-name">{strDrink}</h2>
            </article>
          );
        })}
    </section>
  );
};

export default CocktailList;
