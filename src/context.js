import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSearchbarVisible, toggleSearchbar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const showSearchbar = () => toggleSearchbar(true);
  const hideSearchbar = () => toggleSearchbar(false);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(url + searchTerm);
      console.log(response.data);
      setCocktails(response.data["drinks"]);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        searchTerm,
        cocktails,
        isSearchbarVisible,
        showSearchbar,
        hideSearchbar,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
