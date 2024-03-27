import React from "react";

export default function Category({category}) {
  return (
    <>
      <li
        name={category.name}
        key={index}
        onClick={() => onClickCategory(category)}
        className={ 'bg-slate-50 ' + 
          category === currentCat
            ? "category-active category"
            : "category-unactive category"
        }
      >
        {category}
        <div>
          <div
            className={
              category === currentCat ? "line-active" : "line-unactive"
            }
          ></div>
        </div>
      </li>
      page
    </>
  );
}
