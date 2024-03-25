import React from 'react'
import './product.css';
export default function Pagination({totalPosts, postsPerPage, setCurrentPage, currentNum}) {
    let pages = [];
    for (var i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i);
    }   
    return (
    <div className='overflow-scroll' style={{
        transform: 'translateX(3em)',
        transition: 'transform 2s'
    }}>
        {
            pages.map((page, index) => {
                return <button key = {index} className = {currentNum === page ? 'pagination-num-active' : 'pagination-num-unactive'} onClick = {() => setCurrentPage(page)}>{page}</button>
            })
        }
    </div>
  )
}
