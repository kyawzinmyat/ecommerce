import React from "react";
import { useState } from "react";
import "./signup.css";
import { Navigate, useNavigate } from "react-router-dom";
import GenderRadioGroup from "./GenderRadioGroup";
import ActivationAccountPopup from "./ActivationAccountPopup";
import BounceLoader from "react-spinners/BounceLoader";

const API_HOST = "http://127.0.0.1:8000/account_authentication/";

const defaultRegistrationFields = [
  {
    fieldName: "email",
    name: "Email",
    message: "",
    style: { color: "red", fontSize: "12px" },
    type: "email",
    placeholder: "Your Email",
    pattern: "",
  },
  {
    fieldName: "username",
    message: "",
    name: "Username",
    style: { color: "red", fontSize: "12px" },
    type: "text",
    placeholder: "Your Username",
    pattern: "",
  },
  {
    fieldName: "password",
    name: "Password",
    message: "",
    style: { color: "red", fontSize: "12px" },
    type: "password",
    placeholder: "Enter your Passowrd",
    pattern: "",
  },
  {
    fieldName: "password2",
    message: "",
    name: "Confirm Password",
    style: { color: "red", fontSize: "12px" },
    type: "password",
    placeholder: "Re-enter your Password",
    pattern: "",
  },
  {
    fieldName: "phone_number",
    name: "Phone Number",
    message: "",
    style: { color: "red", fontSize: "12px" },
    type: "tel",
    placeholder: "Your Phone",
    pattern: "",
  },
];

export default function SignUp() {
  const [selectedGender, setSelectedGender] = useState("male");
  const [loading, setLoading] = useState(false);

  const [registrationFields, setRegistrationFields] = useState(
    defaultRegistrationFields
  );

  document.title = "Sign Up";
  const navigate = useNavigate();

  let signup = async (e) => {
    e.preventDefault();
    setLoading((loading) => !loading);
    blurBody();
    var username = e.target.username.value;
    var firstname = e.target.first_name.value;
    var lastname = e.target.last_name.value;
    var email = e.target.email.value;
    var password = e.target.password.value;
    var password2 = e.target.password2.value;
    var phoneNumber = e.target.phone_number.value;
    let response = await callSignupApi(
      username,
      firstname,
      lastname,
      password,
      password2,
      phoneNumber,
      email
    );
    let data = await response.json();
    setLoading((loading) => !loading);
    blurBody();
    if (response.status === 200) {
      openPopup();
    } else {
      data.messages.map((msg) => {
        setRegistrationFields((registrationFields) =>
          registrationFields.map((field) => {
            if (field.fieldName === msg.field) {
              return { ...field, message: msg.message };
            }
            return field;
          })
        );
      });
    }
  };

  let blurBody = () => {
    let signupForm = document.getElementById('sign-up-body');
    if (loading)  signupForm.classList.add('blured-when-popup-opended')
    else signupForm.classList.remove('blured-when-popup-opended')
  }

  let callSignupApi = async (
    username,
    firstname,
    lastname,
    password,
    password2,
    phoneNumber,
    email
  ) => {
    let response = await fetch(`${API_HOST}signup/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        phone_number: phoneNumber,
        first_name: firstname,
        last_name: lastname,
        password: password,
        password2: password2,
        gender: selectedGender,
      }),
    });
    return response;
  };

  let openPopup = () => {
    let popup = document.getElementById("activation_popup");
    popup.classList.add("open-popup");
    let signupForm = document.getElementById("signup-form");
    signupForm.classList.add("blur");
  };

  const onSubmitForm = (e) => {
    setRegistrationFields(defaultRegistrationFields);
    signup(e);
  };

  const onClickLogin = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  return (
    <>
      <ActivationAccountPopup />
      {( loading &&
                <BounceLoader
                  color="var(--primary-color)"
                  cssOverride={{ position: "absolute", top:'50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1000000'}}
                  loading
                  size={100}
                />
              )}
      <div className="sign-up-body bg-slate-100" id='sign-up-body'>
        <div className="container-signup ">
          <div className="sign-up-title">Registration</div>
          <form onSubmit={onSubmitForm} id="signup-form">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Firstname</span>
                <input
                  className=""
                  name="first_name"
                  type="text"
                  placeholder="Your Firstname"
                  pattern="[a-z]{4,10}"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Lastname</span>
                <input
                  className=""
                  name="last_name"
                  type="text"
                  placeholder="Your Lastname"
                  required
                ></input>
              </div>
              {registrationFields.map((field) => {
                return (
                  <div className="input-box" key={field.name}>
                    <span className="details">
                      {field.name}{" "}
                      {field.message && (
                        <span style={field.style}>({field.message})</span>
                      )}
                    </span>
                    <input
                      className={field.message ? "shake-animation" : ""}
                      name={field.fieldName}
                      type={field.type}
                      style={field.message ? { border: "1px solid red" } : {}}
                      placeholder={field.placeholder}
                    ></input>
                  </div>
                );
              })}
              {/* <div className="input-box">
              <span className="details">Username</span>
              <input
                className=""
                name="username"
                type="text"
                placeholder="Enter Your Username"
              ></input>
            </div> */}
              {/* <div className="input-box">
              <span className="details">Email</span>
              <input
                name="email"
                className=""
                type="text"
                placeholder="Enter Your Email"
              ></input>
            </div> */}
              <div className="input-box">
                <span className="details">Date of Birth</span>
                <input
                  name="birthdate"
                  className=""
                  type="date"
                  placeholder="Enter BirthDate"
                ></input>
              </div>
              {/* <div className="input-box">
                <span className="details">Password</span>
                <input
                  name="password"
                  className=""
                  type="password"
                  placeholder="Enter Your Password"
                ></input>
              </div>

              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  className=""
                  name="password2"
                  type="password"
                  placeholder="Enter Your Confirm Password"
                ></input>
              </div> */}
            </div>
            <div className="gender-details">
              <span className="gender-title">Gender</span>
              <div className="category-sign-up">
                <GenderRadioGroup
                  setSelectedGender={setSelectedGender}
                  selectedGender={selectedGender}
                />
              </div>
            </div>
            <div className="button-sign-up">
              <input type="submit" value="Register"></input>
              <button className="login-sign-up" onClick={onClickLogin}>
                Already have an Account? Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
