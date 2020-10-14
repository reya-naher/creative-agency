import React, { useContext } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Components/FirebaseConfig/FirebaseConfig';
import { UserContext } from '../../App'
import { useHistory, useLocation,Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(res => {
        const { displayName, email } = res.user;
        const signedInUser = {
          name: displayName,
          email: email
        }
        setLoggedInUser(signedInUser);
        // setUserToken();
        history.replace(from);
      }).catch(error => {
        console.log(error)
      });
  }

  // const setUserToken = () => {
  //   firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
  //     sessionStorage.setItem('token',idToken)
  //   }).catch(function(error) {
  //     // Handle error
  //   });
  // }

  return (
    <div className="container">
      <div className="imgDiv">
        <Link to="/">
          <img src="https://i.imgur.com/C2lhwy9.png" height="50" width="150" alt="" />
          </Link>
      </div>
      <div className="loginDiv p-5">
        <h2 className="mt-5"><b>Login With</b></h2>
        <button
          className="googleSign"
          onClick={googleSignIn}>
          <FontAwesomeIcon className="mr-5" icon={faGoogle} /> 
             Continue with Google
             </button>
      </div>
    </div>
  );
};

export default Login;