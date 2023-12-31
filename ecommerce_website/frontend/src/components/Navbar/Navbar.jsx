import "./navbar.css";
import LogoImage from "../../images/facebook.png";
import React, { useEffect, useContext } from "react";
import UserDropDown from "./UserDropDown";
import AuthContext from "../../context/AuthContext";
import BasketContext from "../../context/BasketContext";
import Basket from "../basket/Basket";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  var API_HOST = "http://127.0.0.1:8000/account_authentication";
  const navigate = useNavigate();
  const {setToken} = useContext(BasketContext);

  let { user, logout } = useContext(AuthContext);

  useEffect(
      () => {
        const body = document.body;
        const nav = document.getElementById('nav-body');
        let last_scroll = 0;
        window.addEventListener('scroll', () => {
            const current_scroll = window.scrollY;
            if (current_scroll <= last_scroll){
              nav.classList.remove('scroll-down')
               nav.classList.add('scroll-up')
            }
            if (current_scroll > last_scroll) {
              nav.classList.remove('scroll-up');
              nav.classList.add('scroll-down');
            }
            last_scroll = current_scroll;
        })
      }
  , [])

  let onClickLoginOrSignup = () => {
    if (user) {
      logout();
      setToken(null);
    }
    else navigate('/login')
  }

  let onClickHamburger = ()=> {
    let nav = document.getElementById('navigation');
    nav.setAttribute('data-visible', nav.getAttribute('data-visible') === 'true'? 'false': 'true')
  }

  let renderDropDown = () => {
    return <UserDropDown />;
  };

  let openSubmenu = (e) => {
    e.preventDefault();
    var submenu = document.getElementById("drop-down-menu");
    submenu.classList.toggle("open");
  };

  let openMainCategories = (e) => {
    if (e) e.preventDefault();
    var mainCategories = document.getElementById("main-categories-container");
    mainCategories.classList.toggle("open");
  };

  return (
    <div className="nav-body my-3" id='nav-body'>
      <header className="flex nav-container">
        <div className="logo-img">
          <img src={LogoImage} alt="logo image"></img>
        </div>

        <div className='mobile-nav-toggle' id='mobile-nav-toggle' onClick={onClickHamburger}>
        </div>

        <nav className="primary-navigation">
          <ul className="navigation" id ='navigation' data-visible='false'>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Category</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li className="hide"><a>Account</a></li>
            <li className="hide login-or-signup"><a onClick={onClickLoginOrSignup}>{user ? 'Logout' : 'Login'}</a></li>
            <li className="nav-item list-unstyled basket btn hide">
              <a>
              <Basket />
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <ul className="secondary-navigation">
            <li className="account-nav list-unstyled" href="">
              <div>{renderDropDown()}</div>
            </li>
            <li className="nav-item list-unstyled account">
              <a className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="#000000"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                  onClick={openSubmenu}
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item list-unstyled basket btn">
              <Basket />
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
