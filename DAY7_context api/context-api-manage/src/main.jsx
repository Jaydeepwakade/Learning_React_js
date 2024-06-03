import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemContext from "./components/ThemContext.jsx";
import Usercontest from "./components/Usercontest.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemContext>
    <Usercontest>
      <App />
    </Usercontest>
  </ThemContext>
);
