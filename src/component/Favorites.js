import React, { useContext } from "react";
import { StoreContext } from "./../Context/StoreContext";
import { NavLink } from "react-router-dom";

const Favorites = () => {
  const { fav } = useContext(StoreContext);

  return (
    <div className="favorite">
      <h2>Favorite Recipes</h2>
      <div className="favorites">
        {fav.map((item) => (
          <div key={item.idMeal} className="favorite-card">
            <NavLink to={`/product/${item.idMeal}`}>
              <img src={item.strMealThumb} alt={item.strMeal} />
              <h4>{item.strMeal}</h4>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;