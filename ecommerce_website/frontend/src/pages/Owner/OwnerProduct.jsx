import React, { useEffect, useState, useContext } from 'react'
import UserContext from '../../context/UserContext';
import { API_HOST } from '../../API.js'
import PopularCategories from '../../components/categories/PopularCategories.jsx';
import ProductMainCategories from '../../components/categories/ProductMainCategories.jsx';
import AuthContext from '../../context/AuthContext.jsx';
import { useNavigate } from "react-router-dom";
import UtilHeader from './UtilHeader.jsx';
import ProductContainer from './ProductContainer.jsx';

export default function OwnerProduct() {

    let [product, setProducts] = useState([]);
    let [fixProduct, setFixProducts] = useState([]);
    let [loading, setLoading] = useState(true);
    let { userInfo } = useContext(UserContext)
    let [popularCategories, setPopularCategories] = useState('');
    let [loadedPopularCategories, setLoadedPopularCategories] = useState(false);
    let [currentCategory, setCurrentCategory] = useState()
    let [paginationSize, setPaginationSize] = useState(40)
    let [currentPage, setCurrentPage] = useState(0)

    let { token } = useContext(AuthContext);

    const onClickCategory = (category) => {
        setCurrentCategory(category)
    }

    let fetchPopularCategories = async () => {
        let respone = await fetch(
            API_HOST + 'products/main-categories',
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + String(token.access),
                },
            }
        )
        let data = await respone.json();
        setPopularCategories(data.slice(0, 5));
        setCurrentCategory(data[0])
    }

    const fetchProduct = async () => {
        console.log(userInfo)
        let response = await fetch(API_HOST + "products/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                vendor: { id: userInfo.id },
                productCategory: {
                    id: currentCategory.id
                },
                pagination: {
                    offset: currentPage * paginationSize,
                    size: paginationSize
                }
            },)
        });
        var data = await response.json();
        setProducts(data);
        setFixProducts(data)
    };

    useEffect(
        () => {
            currentCategory && fetchProduct()
            if (!loadedPopularCategories) {
                fetchPopularCategories();
                setLoadedPopularCategories(true);
            }
        }
        , [currentCategory, currentPage])

    const navigate = useNavigate()

    const onClickGoBack = () => {
        navigate('/admin-home')
    }

    return (
        <div className='font-sans text-center bg-slate-100 p-3'>
            <div onClick={onClickGoBack} className='absolute cursor-pointer top-8 inline-flex w-[140px] justify-center m-2 items-center left-0 '>
                <svg className="svg-icon" width={20} viewBox="0 0 20 20">
                    <path fill="black" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                </svg>
                {/* <a className='text-lg no-underline text-dark'>Go Back</a> */}
            </div>
            {/* <h1 className='font-serif tracking-tight line-clamp-4 p-0 text-md pt-3 text-slate-700'>Products</h1> */}
            {popularCategories && <div className='grid grid-cols-5 m-0 '>
                <div className='bg-white mt-[113px]'>
                    <div className=' bg-slate-100'></div>
                    <div className='p-2 h-[500px] overflow-scroll'>
                        {popularCategories.map(
                            (item, index) => {
                                return <div onClick={() => onClickCategory(item)} key={index} className={' border-0 py-2 cursor-pointer ' + (currentCategory.id === item.id ? 'bg-blue-300 text-white' : ' text-black')}>
                                    <p className='font-serif'>{item.name}</p>
                                </div>
                            }
                        )}

                    </div>
                    <div className='border-0 inline-flex justify-center items-center w-[70%] mx-[auto] cursor-pointer rounded-md'>
                        <p className='font-serif text-black p-3'>Add</p>
                    </div>
                </div>
                <ProductContainer setProducts={setFixProducts} setCurrentPage={setCurrentPage} offset={currentPage * paginationSize + 1} size={paginationSize} product={fixProduct} productOrigin={product} currentCategory={currentCategory}></ProductContainer>
            </div>}
        </div>
    )
}
