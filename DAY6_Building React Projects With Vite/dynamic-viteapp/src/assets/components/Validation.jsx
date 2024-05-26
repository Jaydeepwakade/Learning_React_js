import React, { useRef, useState } from "react";

function Validation() {
  const username = useRef(null);
  const password = useRef(null);
  const [usernameerror, setusernamerror] = useState("");
  const [passworderror, setpassworderror] = useState("");
  const [flag, setflag] = useState(false);

  const usernamehandle = () => {
    let user = username.current.value;
    if (user.length - 1 <= 5) {
      setusernamerror("username should contain minimum six character");
      console.log(usernameerror);
    } else {
      setusernamerror("");
    }
  };

  const handlepassword = () => {
    let pass = password.current.value;
    if (pass.length <= 8) {
      setpassworderror("password must contain 8 character");
      console.log(passworderror);
    } else {
      setpassworderror("");
    }
  };

  const onbtnclick = (e) => {
    e.preventDefault();
    usernamehandle();
    handlepassword();
    if (
      !usernameerror &&
      !passworderror &&
      username.current.value &&
      password.current.value
    ) {
      setflag(true);
    } else {
      setflag(false);
    }
  };

  return (
    <div>
      {flag ? (
        <div>
          <h1>succesfully login</h1>
          <h1>username: {username.current.value}</h1>
          <h1>password: {password.current.value}</h1>
        </div>
      ) : (
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={onbtnclick}
        >
          <label htmlFor="">enter the username</label>
          <input ref={username} onChange={usernamehandle} type="text" />
          <p style={{ backgroundColor: "red" }}>
            {usernameerror ? usernameerror : ""}
          </p>
          <label htmlFor="">enter the password</label>
          <input ref={password} onChange={handlepassword} type="text" />
          <p style={{ backgroundColor: "red" }}>
            {passworderror ? passworderror : ""}
          </p>
          <button type="submit">submit</button>
        </form>
      )}
    </div>
  );
}

export default Validation;
