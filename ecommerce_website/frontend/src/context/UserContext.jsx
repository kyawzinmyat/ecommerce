import { createContext, useState, useEffect, useContext } from "react";
import AuthContext from "./AuthContext";

const API_HOST = "http://127.0.0.1:8000/api/";

const UserContext = createContext();
export default UserContext;

// items = [{pk: itemId, product: productId,quantity: , product_price: , total_price: }]

export const UserProvider = (props) => {
  let [token, setToken] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const {user} = useContext(AuthContext);
  
  let contextData = {
  };

  return (
    <UserContext.Provider value={contextData}>
      {props.children}
    </UserContext.Provider>
  );
};
