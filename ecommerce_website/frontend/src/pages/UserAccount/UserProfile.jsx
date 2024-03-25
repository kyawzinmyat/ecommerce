import React, { useContext } from "react";
import "./UserProfile.css";
import Button from "../../components/buttons/Button";
import DefaultProfilePicture from '../../images/profile_picture.png'
import UserContext from "../../context/UserContext";

export default function UserProfile() {

  let {userInfo} = useContext(UserContext);

  const userInformations = [ 
                              {name: 'Username', id: 0, key: 'username'}, 
                              {name: 'Email', id: 1, key: 'email'},
                              {name: 'First Name', id: 2, key: 'first_name'}, 
                              {name: 'Last Name', id: 3, key: 'last_name'}
                            ];

  return (
    <div className="text-dark">
      <div className="grid md:grid-cols-3 p-10 bg-slate-100">
        <div className="md:col-span-3 row-start-1">
          <div className="grid grid-cols-7">
            {/* <p className="md:col-span-6 col-span-7 text-xl p-3">Hello Kyaw! This is your profile page</p> */}
            <div className="md:w-30 top-0 col-span-7 md:col-span-1 absolute w-40">
              <Button primary rounded>
                <a href='/' style={{textDecoration: 'none', color: '#fff'}}>
                  Go Back To Home
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 p-10 bg-white rounded-md">
          <div className="">
            <div className="flex">
              <h4 className="">My Account</h4>
              <p className="px-4 py-2 text-center bg-dark text-ellipsis text-light">Setting</p>
              {/* <div className="">
                <p className="px-4 py-2 text-center bg-dark text-ellipsis text-light">Setting</p>
              </div> */}
            </div>

            <div className="mt-[2em]">
              <div className="text-muted">User Information</div>
              <div className="user-information-container">
                {
                  userInformations.map(
                    ui => {
                      return <div className="input-box" key={ui.id}>
                              <span>{ui.name}</span>
                              <p className="text-xl font-medium">{userInfo[ui.key] || ''}</p>
                            </div>
                    }
                  )
                }
                {/* <div className="input-box">
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
                </div> */}
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
        <div className="p-2 row-start-2 md:row-start-2">
          <div className="text-center">
            <img src={DefaultProfilePicture} className="w-full  my-3"></img>
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
