import React, { useContext } from "react";
import "./UserProfile.css";
import Button from "../../components/buttons/Button";
import DefaultProfilePicture from '../../images/profile_picture.png'
import UserContext from "../../context/UserContext";

export default function UserProfile() {

  let {test} = useContext(UserContext);

  return (
    <div className="text-dark">
      <div className="grid md:grid-cols-3 p-10">
        <div className="md:col-span-3 border rounded-md row-start-1">
          <div className="grid grid-cols-7">
            <p className="md:col-span-6 col-span-7 text-xl p-3">Hello <strong className="text-2xl">Kyaw!</strong> This is your profile page</p>
            <div className="md:w-30  col-span-7 md:col-span-1 w-full">
              <Button primary rounded>Edit Setting</Button>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 p-10 border rounded-md">
          <div className="">
            <div className="flex">
              <h4 className="">My Account</h4>
              <p className="px-4 py-2 text-center bg-dark text-ellipsis text-light">Setting</p>
              {/* <div className="">
                <p className="px-4 py-2 text-center bg-dark text-ellipsis text-light">Setting</p>
              </div> */}
            </div>

            <div>
              <div className="text-muted">User Information</div>
              <div className="user-information-container">
                <div className="input-box">
                  <span>Username</span>
                  <input></input>
                </div>
                <div className="input-box">
                  <span>Email Address</span>
                  <input></input>
                </div>
                <div className="input-box">
                  <span>First name</span>
                  <input></input>
                </div>
                <div className="input-box">
                  <span>Last name</span>
                  <input></input>
                </div>
              </div>
            </div>
            <hr className="bg-muted my-5"></hr>
            <div className="">
              <div className="text-muted">Contact Information</div>
              <div className="user-information-container">
                <div className="input-box">
                  <span>Username</span>
                  <input></input>
                </div>
                <div className="input-box">
                  <span>Email Address</span>
                  <input></input>
                </div>
                <div className="input-box">
                  <span>First name</span>
                  <input></input>
                </div>
                <div className="input-box">
                  <span>Last name</span>
                  <input></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 border rounded-md row-start-2 md:row-start-2">
          <div className="text-center">
            <img src={DefaultProfilePicture} className="w-full border my-3"></img>
            <h1>Jessica Jone, 27</h1>
            <p>Yangon, Myanmar</p>
            <p>
              Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick
              Murphy — writes, performs and records all of his own music.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
