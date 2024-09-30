import React, { useEffect, useState, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { StoreContext } from "./../Context/StoreContext";
import Search from "./Search";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState({});
  const { fav, addToFav, removeFromFav } = useContext(StoreContext);
  const params = useParams();

  async function fetchProduct() {
    const result = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.productid}`
    );
    setProduct(result.data.meals[0]);
  }

  useEffect(() => {
    fetchProduct();
  }, [params.productid]);

  const isFavorited = fav.some(item => item.idMeal === product.idMeal);

  const handleFavToggle = () => {
    if (isFavorited) {
      removeFromFav(product.idMeal);
    } else {
      addToFav(product);
    }
  };

  return (
    <div>
      <Search />
      <NavLink to="/favorites" className="favorites-button">
        Go to Favorites
      </NavLink>

      <div className="product">
        <div className="product-img">
          <div>
          <h3>{product.strMeal}</h3>
          <img
            src={product.strMealThumb}
            alt={product.strMeal}
          />
          </div>
          <div>
          <p>{product.strInstructions}</p>
          </div>
          <button 
            onClick={handleFavToggle} 
            style={{ position: 'absolute', top: '10px', right: '10px',padding:"10px 20px" , backgroundColor:"tomato",borderRadius:"20px",border:"none",cursor:"pointer",fontWeight:"600",color:"white" }}
          >
            {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;