import { createContext } from "react";
import React, { useState, useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = createContext();
const API_HOST = 'http://127.0.0.1:8000/account_authentication/'

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [token, setToken] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  let [response, setResponse] = useState("");
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  let [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      updateToken();
    }
    let time = 100000000;
    let interval = setInterval(async () => {
      if (token) await updateToken();
    }, time);
    return () => clearInterval(interval);
  }, [user, token]);

  let getUser = async (e) => {
    var API_HOST = "http://127.0.0.1:8000/account_authentication";
    let response = await fetch(API_HOST, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(token.access),
      },
    });
    var data = await response.json();
  };

  // let signup = async (e) => {
  //   e.preventDefault();
  //   var username = e.target.username.value;
  //   var firstname = e.target.first_name.value;
  //   var lastname = e.target.last_name.value;
  //   var email = e.target.email.value;
  //   var password = e.target.password.value;
  //   var password2 = e.target.password2.value;
  //   var phoneNumber = e.target.phone_number.value;

  // };

  // let callSignupApi = async () => {
  //   let response = await fetch(
  //     `${API_HOST}signup/`,
  //     {
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username: username,
  //         email: email,
  //         phone_number: phoneNumber,
  //         first_name: firstname,
  //         last_name: lastname,
  //         password: password,
  //         gender: selected
  //       })
  //     }
  //   )
  // }

  let login = async (e) => {
    e.preventDefault();
    var username = e.target.username.value;
    var password = e.target.password.value;
    let response = await fetch(`${API_HOST}api/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: username, password: password }),
    });
    var data = await response.json();
    if (response.status === 200 ) {
      console.log(response);
      setTokenUserLocalStorage(data);
      navigate("/");
      return;
    }
    logError();
  };

  let djangoLogin = async (e) => {
    e.preventDefault();
    var username = e.target.username.value;
    var password = e.target.password.value;
    let response = await fetch(`${API_HOST}login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });
    console.log(response.json());
  };

  let setTokenUserLocalStorage = (data) => {
    setToken(data);
    setUser(jwt_decode(data.access));
    localStorage.setItem("authTokens", JSON.stringify(data));
  };

  let logout = async () => {
    fetch(`${API_HOST}logout`);
    setUser(null);
    setToken(null);
    setResponse(null);
    localStorage.removeItem("authTokens");
    navigate("/login");
  };

  let updateToken = async () => {
    if (user) {
      var API_HOST =
        "http://127.0.0.1:8000/account_authentication/api/token/refresh/";
      let response = await fetch(API_HOST, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: token ? token.refresh : null }),
      });
      var data = await response.json();
      if (response.status === 200) {
        setTokenUserLocalStorage(data);
      } else logout();
    }

    if (loading) {
      setLoading(false);
    }
  };

  let contextData = {
    login: login,
    user: user,
    token: token,
    response_code: response,
    logout: logout,
    // signup: signup,
  };

  let logError = () => {
    var messageBox = document.getElementById("errorMessage");
    messageBox.style.visibility = "visible";
    messageBox.innerHTML = "Invalid Username or Password";
    messageBox.style.color = "red";
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
