import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);

  const params = useParams();
  console.log("params", params);
  async function fetchCategory() {
    const result = await axios(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    setCategory(result.data.categories);
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="category">
      <h2>Category</h2>
      <div className="category-page">
      {category.map((subCategory) => {
        return (
          <div key={subCategory.idCategory} className="category-card">
            <NavLink to={`/subcategory/${subCategory.strCategory}`}>
              <h6>{subCategory.strCategory}</h6>
              {/* <p>{subCategory.strCategoryDescription}</p> */}
              <img
                src={subCategory.strCategoryThumb}
                alt={subCategory.strCategory}
              />
            </NavLink>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Category;
