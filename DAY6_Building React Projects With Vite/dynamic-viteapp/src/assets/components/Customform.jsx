import React, { useRef } from "react";

function Customform() {
  const username = useRef(null);
  const password = useRef(null);

  function handlesubmit(event) {
    event.preventDefault();
    const name = username.current.value;
    const pass = password.current.value;

    if (name.length <= 6) {
      alert("username must be 6 charcters");
      return
    }

    if (pass.length <= 8) {
      alert("password must contain 8 digit");
      return
    }
    showdata(name, pass);
  }

  function showdata(name, pass) {
    console.log(name, pass);
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label htmlFor="">username</label>
        <input ref={username} type="text" />
        <label htmlFor="">password</label>
        <input ref={password} type="password" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Customform;
