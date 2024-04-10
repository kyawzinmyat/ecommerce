import { createContext, useState, useEffect, useContext } from "react";
import { API_HOST } from '../../API.js'
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext.jsx";
import ProductContext from "../../context/ProductContext.jsx";

const ProductContextSub = createContext();
export default ProductContextSub;

// items = [{pk: itemId, product: productId,quantity: , product_price: , total_price: }]

export const ProductSubProvider = (props) => {
  let [token, setToken] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const { user } = useContext(AuthContext);
  const {fetchProduct} = useContext(ProductContext)
  const [products, setProducts] = useState([])

  useEffect(
    () => {
    }, [])

  let contextData = {
    setProductsSub: setProducts,
    products: products
  };

  return (
    <ProductContextSub.Provider value={contextData}>
      { props.children}
    </ProductContextSub.Provider>
  );
};
