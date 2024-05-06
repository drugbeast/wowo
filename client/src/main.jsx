import "./index.css";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/inter";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

const firebaseConfig = {
  apiKey: "AIzaSyCGAJVCHauL_tUjQqk6WFLdjE7nwq-4fQA",
  authDomain: "wowo-374ec.firebaseapp.com",
  projectId: "wowo-374ec",
  storageBucket: "wowo-374ec.appspot.com",
  messagingSenderId: "1027105830880",
  appId: "1:1027105830880:web:c53739d91454f2c7195d85",
  measurementId: "G-7673067S4T",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);
