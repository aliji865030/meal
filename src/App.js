import "./App.css";
import Home from "./component/Home";
import Search from "./component/Search";
import {NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Search />
      <NavLink to="/favorites" className="favorites-button">
        Go to Favorites
      </NavLink>
      <Home />
    </div>
  );
}

export default App;
