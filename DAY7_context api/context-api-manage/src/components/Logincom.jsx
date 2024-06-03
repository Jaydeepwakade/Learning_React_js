import React, { useContext, useRef } from "react";
import { Usercontext } from "./Usercontest";
import { contexttheme } from "./ThemContext";

const Logincom = () => {
  const { user, userdat, logout } = useContext(Usercontext);
  const {theme}=useContext(contexttheme)
  const username = useRef();
  const password = useRef();

  function handlesubmit(e) {
    e.preventDefault();
    const name = username.current.value;
    const pass = password.current.value;
    userdat({ name, pass });
    console.log(user);
  }

  return (
    <div className={`flex flex-col items-center  justify-center h-[93vh] ${theme==="light"?"bg-pink-600":"bg-black text-white"} w-100 border border-black`}>
      <form
        onSubmit={handlesubmit}
        className="flex flex-col items-center justify-center w-[300px] h-[200px] gap-4 m-4 border border-black bg-green-300 "
      >
        <input
          className="text-center bg-yellow-300"
          ref={username}
          type="text"
          placeholder="enter username"
        />
        <input
          className="text-center bg-yellow-300"
          ref={password}
          type="text"
          placeholder="enter password"
        />
        <button
          className="border border-black p-1 w-40 bg-red-400 rounded-3xl"
          type="submit"
        >
          submit
        </button>
      </form>

      {user &&(
        <div>
          <p>welcome,{user.name}</p>
          <button onClick={logout}>logout</button>
        </div>
      )}
    </div>
  );
};

export default Logincom;
