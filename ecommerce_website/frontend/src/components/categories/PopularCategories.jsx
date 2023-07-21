import React, { useEffect, useState, useContext } from 'react'
import AuthContext from '../../context/AuthContext';
var API_HOST = "http://127.0.0.1:8000/api/products/main-categories";


export default function PopularCategories() {
  let [popularCategories, setPopularCategories] = useState();
  let [loadedPopularCategories, setLoadedPopularCategories] = useState(false);
  let {token} = useContext(AuthContext);

  useEffect(() => {
    let fetchPopularCategories = async () => {
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
        setPopularCategories(data.slice(0,5));
    }
    if (!loadedPopularCategories) {

        fetchPopularCategories();
        setLoadedPopularCategories(true);
    }
  }, [popularCategories]);

  return (
    <div>
        <div className='popular-categories-container'>
        {popularCategories && popularCategories.map((category, index) => {
        return (
          <span
            key={category.id}
            className='category-pill  badge badge-pill badge-primary'>
            {category.name}
          </span>
        );
      })}
        </div>
      </div>
  )
}


