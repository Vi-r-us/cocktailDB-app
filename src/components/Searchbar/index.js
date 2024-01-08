import React, { useEffect, useRef } from "react";
import "./searchbar.css";
import { useGlobalContext } from "../../context";

const Searchbar = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => searchValue.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue.current.value);
    if (!searchValue.current.value) return;
    setSearchTerm(searchValue.current.value);
  };

  return (
    <section className="searchbar flex" direction="col">
      <form
        className="search-form flex"
        direction="row"
        onSubmit={handleSubmit}
      >
        <div className="form-control">
          <input type="text" id="name" ref={searchValue} />
        </div>
        <button className="search-btn" type="submit">
          search
        </button>
      </form>
    </section>
  );
};

export default Searchbar;
