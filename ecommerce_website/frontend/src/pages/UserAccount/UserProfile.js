import React from "react";
import "./UserProfile.css";
import Button from "../../components/buttons/Button";

export default function UserProfile() {
  return (
    <div className="user-profile-container text-dark ">
      <div className="user-profile-body">
        <div className="user-profile-header text-white">
          Hello Kyaw,
          <p>This is your profile page</p>
          <Button>Edit Setting</Button>
          <hr className="bg-light border-3"></hr>
        </div>
        <div className="user-profile-body-container">
          <div className="user-profile-body-subcontainer">
            <div className="user-profile-header-container">
              <h4>My Account</h4>
              <p className='px-4 py-2 bg-dark text-white rounded-4  '>Setting</p>
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
            <hr className='bg-muted my-5'></hr>
            <div className=''>
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
          {/* <div className="user-profile-side-body-container">
            <h1>Jessica Jone, 27</h1>
            <p>Yangon, Myanmar</p>
            <p>
              Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick
              Murphy — writes, performs and records all of his own music.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
