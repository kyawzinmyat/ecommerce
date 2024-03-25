import React from "react";
import './login.css';
import { useContext, useEffect } from "react";
import { Navigate, useNavigate} from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();

  const onClickSignup  = () => {
    navigate('/signup')
  }
  let {login} = useContext(AuthContext);
  let {user} = useContext(AuthContext);

  document.title = 'Login'
  
  useEffect(
    () => {
      if (user){
        navigate('/');
      }
    
    }, [user])

  return (
    <div>
      <div className="body-login bg-slate-50">
        <div className="container-login">
            <div className="title-login text-center">
                Login
            </div>
            <div id="errorMessage" className="text-center">
              Test
            </div>
          <form onSubmit={login}>
            <div className="user-details-login">
              <div className="input-box-login">
                <span>Username</span>
                <input type="text" name='username'></input>
              </div>
              <div className="input-box-login">
                <span>Password</span>
                <input type="password" name='password'></input>
              </div>
              <div className="login-button ">
                <input type='submit' className="bg-blue-700	" value='Login'></input>
                <button  className="login-sign-up bg-blue-700	" onClick={onClickSignup}>Do not have an Account? Signup</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
