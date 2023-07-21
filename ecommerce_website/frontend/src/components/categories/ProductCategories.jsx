import React, { useEffect, useContext } from "react";
import { useState } from "react";
import "./categories.css";
import AuthContext from "../../context/AuthContext";

var API_HOST = "http://127.0.0.1:8000/api/products/categories";

export default function ProductCategories({ setProductCategory }) {

  let [categories, setCategories] = useState([]);
  let [defaultCategory, setDefaultCategory] = useState(localStorage.getItem('defaultCategory') ?JSON.parse(localStorage.getItem('defaultCategory')):null);
  let [currentCat, setCurrentCat] = useState(localStorage.getItem('defaultCategory') ?JSON.parse(localStorage.getItem('defaultCategory')).name:'Popular');
  let [categoriesLoaded, setCategoriesLoaded] = useState(false);
  let { token } = useContext(AuthContext);

  useEffect(() => {
    let fetchCategories = async () => {
      let response = await fetch(API_HOST, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(token.access),
        },
      });
      let data = await response.json();
      setCategories(data);
      if (!defaultCategory) setDefaultCategory(data[0]);
    };
    if (!categoriesLoaded) {
      fetchCategories();
      setCategoriesLoaded(true);
    }else setProductCategory(localStorage.getItem('defaultCategory') ?JSON.parse(localStorage.getItem('defaultCategory')):  defaultCategory);

  }, [categories]);

  let onClickCategory = (category) => {
    setCurrentCat(category.name);
    setProductCategory(category);
    localStorage.setItem("defaultCategory", JSON.stringify(category));
  };

  return (
    <div className="category-container">
      <div className="category-container">
        {categories.map((category, index) => {
          return (
            <li
              name={category.name}
              key={index}
              onClick={() => onClickCategory(category)}
              className={
                "col-xs-6" + 
                category === currentCat
                  ? "category-active category"
                  : "category-unactive category"

              }
            >
              {category.name}
              <div className="line-container">
                <div
                  className={
                    category.name === currentCat
                      ? "line-active line"
                      : "line-unactive line"
                  }
                ></div>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
}
