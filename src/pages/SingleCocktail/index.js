import React, { useEffect, useState } from "react";
import "./singleCocktail.css";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import CocktailDetails from "../../components/CocktailDetails";
import { BackButton } from "../../components/NavigationButtons";
import Lottie from "lottie-react";
import cocktailLoadingAnimation from "../../assets/anim/cocktailLoading.json";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { cocktailId } = useParams();
  const [loading, setLoading] = useState("false");
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await axios.get(url + cocktailId);
        // console.log(response.data);
        if (response.data.drinks) {
          setCocktail(response.data.drinks[0]);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error.response);
        setLoading(false);
      }
    }
    getCocktail();
  }, [cocktailId]);

  return (
    <main className="cocktail-detail-page flex" direction="col">
      {/* <h2>{cocktailId}</h2> */}
      <Link to={"/search"}>
        <BackButton />
      </Link>
      {loading ? (
        <Lottie animationData={cocktailLoadingAnimation} />
      ) : cocktail ? (
        <CocktailDetails cocktail={cocktail} />
      ) : null}
    </main>
  );
};

export default SingleCocktail;
