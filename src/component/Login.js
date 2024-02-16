import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import image from "../assets/background.jpg";
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [Errormessage, setErrormessage] = useState(null);
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handler = () => {
    {
      isSignInForm ? setSignInForm(false) : setSignInForm(true);
    }
  };

  const submithandler = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrormessage(message);
    // toast.success("Sign Successfully");

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "--" + errorMessage);
        });
    }
  };
  return (
    <div className="flex items-center justify-center flex-col h-screen banner">
      <h1 className="logo-text text-6xl text-white p-4 shadow-xl">streamer</h1>
      <div className="bg-white p-8  rounded-xl shadow-lg lg:w-[25%] ">
        <h1 className="text-2xl font-bold mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form
          className="flex flex-col space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="input-field border p-2"
              required
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="input-field p-2 border"
            required
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="input-field p-2 border"
            required
          />
          <p className="text-red-500">{Errormessage}</p>
          <button
            className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600 focus:outline-none focus:ring focus:border-red-500"
            onClick={submithandler}
          >
            {isSignInForm ? "Sign in" : "Sign Up"}
          </button>

          <p className="cursor-pointer text-blue-500" onClick={handler}>
            {isSignInForm
              ? "New to Streamer? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
