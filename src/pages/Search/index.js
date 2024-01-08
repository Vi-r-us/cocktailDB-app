import React from "react";
import "./search.css";
import Searchbar from "../../components/Searchbar";
import CocktailList from "../../components/CocktailList";

const Search = () => {

  return (
    <main className="search-page flex" direction="col">
      <Searchbar />
      <CocktailList />
    </main>
  );
};

export default Search;
