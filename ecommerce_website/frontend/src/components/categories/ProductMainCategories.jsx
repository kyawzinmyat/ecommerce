import React, { useEffect, useState, useContext } from 'react'
import AuthContext from '../../context/AuthContext';
import X from '../X';

var API_HOST = "http://127.0.0.1:8000/api/products/main-categories";

export default function ProductMainCategories() {

  let [mainCategories, setMainCategories] = useState();
  let [loadedMainCategories, setLoadedMainCategories] = useState(false);
  let {token} = useContext(AuthContext);
  let [currentCat, setCurrentCat] = useState("Popular");

  let onClickCategory = (category) => {

  }

  useEffect(() => {
    let fetchMainCategories = async () => {
        let respone = await fetch(
            API_HOST,
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + String(token.access),
                  },
            }
        )
        let data = await respone.json();
        setMainCategories(data);
    }
    if (!loadedMainCategories) {
        fetchMainCategories();
        setLoadedMainCategories(true);
    }
  }, [mainCategories]);

  return (
    <div>
        <div className='main-categories-container row'  id = 'main-categories-container'>
        <div>
        <X/>
      </div>
        {mainCategories && mainCategories.map((category, index) => {
        return (
          <p
            name={category.name}
            key={index}
            onClick={() => onClickCategory(category)}
            className={
              category === currentCat
                ? "category-active main-category col-lg-6"
                : "category-unactive main-category col-lg-6"
            }
          >
            {category.name}
            <span className="line-container">
              <span
                className={
                  category.name === currentCat
                    ? "line-active line"
                    : "line-unactive line"
                }
              ></span>
            </span>
          </p>
        );
      })}
        </div>
      </div>
  )
}
