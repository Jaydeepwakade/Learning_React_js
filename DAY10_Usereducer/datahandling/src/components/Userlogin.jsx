import React, { useReducer, useState } from "react";
const intialobj = {
  username: "",
  password: "",
  submitted: false
};

function Userdata(state, action) {
  switch (action.type) {
    case "USERNAME":
      return { ...state, username: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };


      case "SUBMIT" : return {...state, submitted:true}

    case "RESET":
      return intialobj;

    default:
      return state;
  }
}
function Userlogin() {
  const [userdata, dispatcher] = useReducer(Userdata, intialobj);


  function handlesubmit(e) {
    e.preventDefault();
    dispatcher({type:"SUBMIT"})
    console.log(userdata);
   
  }
  function handleReset(){
    
    dispatcher({ type: "RESET"});
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "500px" }}>
      {userdata.submitted ? (
        <div>
          <h1>username:{userdata.username}</h1>
          <h1>password:{userdata.password}</h1>
        </div>) : (<h1>No data found</h1>)
}

   <form
        onSubmit={handlesubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>username</label>
        <input
          value={userdata.username}
          onChange={(e) =>
            dispatcher({ type: "USERNAME", payload: e.target.value })
          }
          type="email"
          placeholder="Enter your email"
        />

        <label htmlFor="">Password</label>
        <input
          value={userdata.password}
          onChange={(e) =>
            dispatcher({ type: "PASSWORD", payload: e.target.value })
          }
          type="password"
          placeholder="Enter the password"
        />
        <button type="submit">submit</button>
        <button onClick={handleReset}>reset</button>
      </form>
    </div>
  );
}

export default Userlogin;
