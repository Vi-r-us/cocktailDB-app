import React from "react";
import "./cocktailDetails.css";
import { getRandomImageStyleType } from "../../utils";

const CocktailDetails = ({ cocktail }) => {
  const {
    strDrink: title,
    strDrinkThumb: image,
    strInstructions: method,
  } = cocktail;

  const ingredientList = getIngredientList(cocktail);
  const tags = getTags(cocktail);
  console.log(tags);
  const imageStyle = getRandomImageStyleType();

  return (
    <section className="cocktail-detail-section">
      <div className={`cocktail-image ${imageStyle}`}>
        <img src={image} alt={title} />
      </div>
      <div className="cocktail-title">
        <h1>{title}</h1>
        {tags && (
          <ul className="cocktail-tags flex" direction="row">
            {tags.map((tag, idx) => (
              <li key={idx}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="cocktail-ingredients">
        <h2>ingredients</h2>
        <ul className="ingredient-list">
          {ingredientList.map((ingredient, index) => {
            const { ingredientName, ingredientMeasurement } = ingredient;
            return (
              <li className="ingredient flex" key={index} direction="row">
                <p>{ingredientName}</p>
                <span></span>
                <p>{ingredientMeasurement || "To your taste"}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="cocktail-method">
        <h2>method</h2>
        <p>{method}</p>
      </div>
    </section>
  );
};

const getIngredientList = (cocktail) => {
  const list = [];
  for (let i = 1; i < 15; i++) {
    if (!cocktail[`strIngredient${i}`]) break;
    if (cocktail[`strIngredient${i}`]) {
      list.push({
        ingredientName: cocktail[`strIngredient${i}`],
        ingredientMeasurement: cocktail[`strMeasure${i}`],
      });
    }
    list.push();
  }
  return list;
};

const getTags = (cocktail) => {
  const tags = new Set();

  cocktail.strTags?.split(",")?.forEach((tag) => tags.add(tag));
  tags.add(cocktail.strCategory);
  tags.add(cocktail.strGlass);
  tags.add(cocktail.strAlcoholic);

  return Array.from(tags);
};

export default CocktailDetails;
