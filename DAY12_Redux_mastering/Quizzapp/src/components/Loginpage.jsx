import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginfunction } from "../redux/actions";
import { Navigate, redirect } from "react-router-dom";
import Quiz from "./Quiz";

function Loginpage() {
  const dispatch = useDispatch();
  const [email, setusername] = useState("");
  const [password, setpassword] = useState("");

  const state = useSelector((state) => state.loginreducer);
  console.log(state);
  const handlesubmit = () => {
    const payload = {
      email: email,
      password: password,
    };
    dispatch(loginfunction(payload));

    console.log(payload);
  };

  if (state.isauthenticate) {
    return <Navigate to="/quiz" />;
  }

  return (
    <div
      style={{
        backgroundColor: "teal",
        display: "flex",
        flexDirection: "column",
        width: "300px",
        gap: "10px ",
        padding: "30px",
      }}
    >
      <input
        onChange={(e) => setusername(e.target.value)}
        type="text"
        placeholder="enter the username"
      />
      <input
        onChange={(e) => setpassword(e.target.value)}
        type="password"
        placeholder="enter the password"
      />
      <button onClick={handlesubmit}>Login</button>

      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </div>
  );
}

export default Loginpage;
