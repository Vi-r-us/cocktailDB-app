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
      <Routes>
        <Route
          path="/"
          element={
            <Redirect>
              <Home />
            </Redirect>
          }
        />
        <Route
          path="/about"
          element={
            <Redirect>
              <About />
            </Redirect>
          }
        />
        <Route
          path="/search"
          element={
            <Redirect>
              <Search />
            </Redirect>
          }
        />
        <Route
          path="/cocktail/:cocktailId"
          element={
            <Redirect>
              <SingleCocktail />
            </Redirect>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

const Redirect = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default App;
