import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Sender from "../../assets/icons/sender.svg?react";
import { useAuth } from "../../hooks/use-auth";
import cn from "./Profile.module.css";

function Profile() {
  const [error, setError] = useState(false);
  const { isAuth, user } = useAuth();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  useEffect(() => {
    isAuth ? null : navigate("/sign-in");
  }, [navigate, isAuth]);

  const resetPassword = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, user.email).then(() => {
      alert("Please, check your email for further instructions.");
    });
  };

  return (
    <div className={cn.profile}>
      <div className="container">
        <div className={cn.inner}>
          <Sender width={256} height={256} />
          <div className={cn.inputs}>
            <input
              className={cn.input}
              type="text"
              placeholder="e-mail"
              readOnly
              value={user.email}
            />
            <input
              className={cn.input}
              type="password"
              value={password}
              onChange={(e) => {
                setError(false);
                setPassword(e.target.value);
              }}
              placeholder="Type new password"
            />
          </div>
          {error && (
            <p className={cn.errorMessage}>
              Something went wrong. Please, check that your new password has at
              least 6 symbols.
            </p>
          )}
          <button
            className={cn.button}
            onClick={() =>
              password.length > 5 ? resetPassword() : setError(true)
            }
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
