import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Layout from "./components/Layout";
import { useAuth } from "./hooks/use-auth";
import Calculator from "./pages/Calculator/Calculator";
import Chat from "./pages/Chat/Chat";
import History from "./pages/History/History";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  const {isAuth} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (isAuth && location.pathname == "/") {
      navigate("/chat")
    }
    else if (!isAuth && location.pathname == "/") {
      navigate("/sign-in")
    }
  }, [])
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}

export default App;
