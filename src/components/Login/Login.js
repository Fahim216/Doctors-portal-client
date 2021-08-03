import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";

import background from "../../images/Group 140.png";
import firebaseConfig from "./firebaseConfig";
import { UserContext } from "./../../App";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  let history = useHistory();
  let location = useLocation();
 
  let { from } = location.state || { from: { pathname: "/" } };
  const handleGoogleSignIn=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
 const {displayName,email}=result.user;
 const signInUser={name:displayName,email:email};
 setLoggedInUser(signInUser)
 history.replace(from);
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  }
  return (
    <section>
      <h3 className="text-center mt-3 text-primary">User Name:{loggedInUser.name}</h3>
      <div className="container ">
        <div className="row mt-5   ">
          <div className="col-md-6 mt-5 pt-5 pb-4 ps-5 fs-4">
            <h2>Login Form</h2>
            <form action="">
              <input type="email" name="email" placeholder="Email" id="" />
              <br />{" "}
              <input
                className="mt-2"
                type="password"
                name="password"
                placeholder="Password"
                id=""
              />
              <br />
              <input
                className="mt-2 btn btn-primary"
                type="submit"
                value="submit"
              />
               
            </form>
            <div className='mt-3'><button onClick={handleGoogleSignIn} className="btn btn-primary">GoogleSignIn</button></div>
           
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src={background} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
