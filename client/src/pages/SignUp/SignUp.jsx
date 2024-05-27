import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import cn from "./SignUp.module.css";

function SignUp() {
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [inputEmail, setEmail] = useState("");
  const [inputPassword, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      );
      return navigate("/chat");
    });
  };

  return (
    <div className={cn.signUp}>
      <div className="container">
        <div className={cn.inner}>
          <h1 className={cn.title}>Sign Up</h1>
          <div className={cn.form}>
            <div className={cn.inputs}>
              <input
                className={cn.input}
                type="email"
                placeholder="e-mail"
                value={inputEmail}
                onChange={(e) => {
                  setError(false);
                  setEmail(e.target.value);
                }}
              />
              <input
                className={cn.input}
                type="password"
                placeholder="password"
                value={inputPassword}
                onChange={(e) => {
                  setError(false);
                  setPassword(e.target.value);
                }}
              />
              <input
                className={cn.input}
                type="password"
                placeholder="repeat password"
                value={repeatedPassword}
                onChange={(e) => {
                  setError(false);
                  setRepeatedPassword(e.target.value);
                }}
              />
            </div>
            {error && (
              <p className={cn.errorMessage}>
                Something went wrong. Please, check that you filled all of
                fields, your passwords are equal and have at least 6 symbols and
                your email is correct
              </p>
            )}
            <button
              onClick={() =>
                inputPassword == repeatedPassword &&
                inputPassword.length > 5 &&
                inputEmail
                  ? handleRegister(inputEmail, inputPassword)
                  : setError(true)
              }
              className={cn.button}
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <p className={cn.message}>
            Already have an account? <Link to="/sign-in">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
