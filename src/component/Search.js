import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState();
  const [meal,setMeal]=useState([])



  async function searchProducts() {
    if (input) {
      const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
      setProducts(result.data.meals);
    }
  }

  return (
    <div>
      <div className="search">
        <div className="search-box">
        <input
          className="search-input"
          type="text"
          placeholder="Search recipes here..."
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={searchProducts} className="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <h1>What are your favorite cuisines?</h1>
        <p>personalize your experience</p>
      </div>

      <div className="meal-page">
        {products.map((product) => {
          return (
            <div key={product.idMeal} className="meal-card">
                <div>
                  <NavLink to={`/product/${product.idMeal}`}>
                    <img
                    src={product.strMealThumb}
                    alt={product.strMeal}
                  />
                  </NavLink>
                  <span className="meal-cat">{product.strCategory}</span>
                </div>
                <span className="meal-area">{product.strArea}</span>
                <h6>{product.strMeal}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
