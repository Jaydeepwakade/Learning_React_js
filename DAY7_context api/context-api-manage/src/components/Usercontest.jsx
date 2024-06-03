import React, { createContext } from "react";
import { useState } from "react";

export const Usercontext = createContext();
function Usercontest({ children }) {
  const [user, setuser] = useState(null);

  function userdat(data) {
    setuser(data);
  }
  function logout() {
    setuser(null);
  }

  return (
    <Usercontext.Provider value={{ user, userdat, logout }}>
      {children}
    </Usercontext.Provider>
  );
}

export default Usercontest;
