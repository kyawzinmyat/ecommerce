import { createContext, useState, useEffect, useContext } from "react";
import AuthContext from "./AuthContext";
import {API_HOST} from '../API.js'
import { data } from "autoprefixer";
import { useNavigate } from "react-router-dom";


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
          body: JSON.stringify({ id:  user.user_id}),
        });
        var data = await response.json();
        console.log(userInfo, data[0], 1)
        setUserInfo(data[0])
      }
      if (token === null) return navigate('/login');
      fetchUserData()
      console.log(userInfo)
    }, [user, userInfo])
  
  let contextData = {
    userInfo: userInfo
  };

  return (
    <UserContext.Provider value={contextData}>
      {userInfo && props.children}
    </UserContext.Provider>
  );
};
