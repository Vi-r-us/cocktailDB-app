import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cocktail/:cocktailId" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
