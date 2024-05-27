import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import cn from "./SignIn.module.css";

function SignIn() {
  const [inputEmail, setEmail] = useState("");
  const [inputPassword, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
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
    <div className={cn.signIn}>
      <div className="container">
        <div className={cn.inner}>
          <h1 className={cn.title}>Sign In</h1>
          <div className={cn.form}>
            <div className={cn.inputs}>
              <input
                className={cn.input}
                type="text"
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
            </div>
            {error && (
              <p className={cn.errorMessage}>
                Something went wrong. Please, check that you filled both of
                fields, your password has at least 6 symbols and your credentials
                are correct
              </p>
            )}
            <button
              className={cn.button}
              type="submit"
              onClick={() =>
                inputEmail && inputPassword.length > 5
                  ? handleLogin(inputEmail, inputPassword)
                  : setError(!error)
              }
            >
              Sign In
            </button>
          </div>
          <p className={cn.message}>
            Don&apos;t have an account? <Link to="/sign-up">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
