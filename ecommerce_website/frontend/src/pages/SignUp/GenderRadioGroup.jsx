import React, { useState } from "react";

export default function GenderRadioGroup({selectedGender, setSelectedGender}) {

  let checkSelectedRadioButton = (gender) => {
    return selectedGender === gender;
  }

  let onChangeRadioButton = (e) => {
    setSelectedGender(e.target.name);
  }

  return (
    <>
      <input type="radio" name="male" checked={checkSelectedRadioButton('male')} onChange={onChangeRadioButton}></input>
      <span className="gender">Male</span>
      <input type="radio" name="female" checked={checkSelectedRadioButton('female')} onChange={onChangeRadioButton}></input>
      <span className="gender">Female</span>
      <input type="radio" name="none" checked={checkSelectedRadioButton('none')} onChange={onChangeRadioButton}></input>
      <span className="gender">Prefer not to Say</span>
    </>
  );
}
