import React from 'react';
import CheckedImage from '../../images/checked.png'
import { Navigate, useNavigate } from "react-router-dom";

export default function ActivationAccountPopup() {
  const navigate = useNavigate();

  let onClickOkButton = () => {
    let popup = document.getElementById('activation_popup');
    popup.classList.remove('open-popup');
    // let signupForm = document.getElementById('signup-form');
    // signupForm.classList.remove('blur')
    navigate('/login')
  }

  return (
    <div className='activation-popup-container'>
        <div className='activation-popup text-center' id='activation_popup'>
          <img src={CheckedImage} className='tick-image' alt='ticked image'></img>
          <h2>Your Account has been Created Successfully!</h2>
          <h4>Please Check your Email to Activate Your Account</h4>
          <h5>Don't Forget to Check the Spam Folder!</h5>
          <button className='pop-up-button' onClick={onClickOkButton}>Ok</button>
        </div>
    </div>
  )
}
