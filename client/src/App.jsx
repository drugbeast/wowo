import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Calculator from "./pages/Calculator/Calculator";
import Chat from "./pages/Chat/Chat";
import History from "./pages/History/History";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
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
