import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Search from "./Search";

const SubCategory = () => {
  const [subCategoryProduct, setSubCategoryProduct] = useState([]);

  const params = useParams();

  console.log("params", params);

  async function fetchSubCategoryProduct() {
    const result = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.subcategory}`
    );
    setSubCategoryProduct(result.data.meals);
  }

  useEffect(() => {
    fetchSubCategoryProduct();
  }, []);

  return (
    <div>
      <Search />
      <NavLink to="/favorites" className="favorites-button">
        Go to Favorites
      </NavLink>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "10px",
          margin: "10px",
          border: "1px solid black",
          borderRadius: "10px",
          backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)"

        }}
      >
        <div className="sub-cat">
          {subCategoryProduct &&
            subCategoryProduct.map((product) => {
              return (
                <div key={product.idMeal} className="sub-cat-card">
                  <NavLink to={`/product/${product.idMeal}`}>
                    <h4>{product.strMeal}</h4>
                    <img
                      src={product.strMealThumb}
                      alt={product.strMeal}
                    />
                  </NavLink>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
