import { Button } from "antd";
import React, { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsTwitter, BsFacebook, BsApple }from "react-icons/bs";
import "../assets/css/x.css";
import { auth } from "../firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  TwitterAuthProvider,
  OAuthProvider 
} from "firebase/auth";

function SignIn() {
  // google auth provider
  const provider = new GoogleAuthProvider();

  // Twitter auth provider
  const providerT = new TwitterAuthProvider();

  const providerA = new OAuthProvider('apple.com');

  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [contact, setcontact] = useState("");
  const [user, setUser] = useState({});

  const SignInGoogle = () => {
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    auth.languageCode = "it";
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user);

        setName(user.displayName);
        setEmail(user.email);
        setImage(user.photoURL);
        setcontact(user.phoneNumber);

        onAuthStateChanged(auth, user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  // const SignOut = () => {
  //   signOut(auth);
  // };

  // const SignInTwitter = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
  //       // You can use these server side with your app's credentials to access the Twitter API.
  //       const credential = TwitterAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       const secret = credential.secret;

  //       // The signed-in user info.
  //       const user = result.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = TwitterAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // };

  // const SignInFacebook = ()=>{

  // }
  // const SignInApple =()=>{
  //   signInWithPopup(auth, provider)
  // .then((result) => {
  //   // The signed-in user info.
  //   const user = result.user;

  //   // Apple credential
  //   const credential = OAuthProvider.credentialFromResult(result);
  //   const accessToken = credential.accessToken;
  //   const idToken = credential.idToken;

  //   // ...
  // })
  // .catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The credential that was used.
  //   const credential = OAuthProvider.credentialFromError(error);

  //   // ...
  // });
  // }
  
  return (
    <>
      {!user ? (
        <>
          <Button
            onClick={SignInGoogle}
            className="btn"
            icon={<AiFillGoogleCircle />}
          >
            Google SignIn
          </Button>
          <Button
            // onClick={}
            className="btn"
            icon={<BsTwitter />}
          >
            Twitter SignIn
          </Button>
          <Button
            // onClick={}
            className="btn"
            icon={<BsFacebook />}
          >
            Twitter SignIn
          </Button>
          <Button
            // onClick={}
            className="btn"
            icon={<BsApple />}
          >
            Apple SignIn
          </Button>
        </>
      ) : (
        <div>
          <div>
            <b>Name :</b>
            {name}
          </div>
          <div>
            <b>Email :</b>
            {email}
          </div>
          <div>
            <b>Contact :</b>
            {contact}
          </div>
          <div>
            <img src={image} alt="profile pic" />
          </div>
        </div>
      )}
    </>
  );
}

export default SignIn;
