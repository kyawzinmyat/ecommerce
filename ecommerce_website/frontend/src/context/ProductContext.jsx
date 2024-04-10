import { createContext, useState, useEffect, useContext } from "react";
import AuthContext from "./AuthContext";
import { API_HOST } from '../API.js'
import { data } from "autoprefixer";
import { useNavigate } from "react-router-dom";

const ProductContext = createContext();
export default ProductContext;

// items = [{pk: itemId, product: productId,quantity: , product_price: , total_price: }]

export const ProductProvider = (props) => {
  let [token, setToken] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState()

  useEffect(
    () => {
      const fetchUserData = async () => {
        let response = await fetch(API_HOST + 'user/info/', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(token.access),
          },
          body: JSON.stringify({ id: user.user_id }),
        });
        var data = await response.json();
        console.log(userInfo, data[0], 1)
        setUserInfo(data[0])
      }
      if (token === null) return navigate('/login');
      fetchUserData()
    }, [user])


  const fetchProduct = async (filter) => {
    let body = {}
    if (filter && filter.vendor_id) body['vendor'] = { id: filter.vendor_id }
    if (filter && filter.productCategory) body['productCategory'] = { id: filter.productCategoryId }
    if (filter && filter.pagination) body['pagination'] = {
      offset: filter.currentPage * filter.paginationSize,
      size: filter.paginationSize
    }
    console.log(body)
    let response = await fetch(API_HOST + "products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    var data = await response.json();
    return data;
  };

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
    console.log(data.slice(0, 5), 121221)
    return data;
  }

  let contextData = {
    userInfo: userInfo,
    fetchProduct: fetchProduct,
    fetchPopularCategories: fetchPopularCategories
  };

  return (
    <ProductContext.Provider value={contextData}>
      {userInfo && props.children}
    </ProductContext.Provider>
  );
};
