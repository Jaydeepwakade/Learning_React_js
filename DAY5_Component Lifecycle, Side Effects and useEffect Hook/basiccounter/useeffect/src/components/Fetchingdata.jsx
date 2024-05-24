import React, { useEffect, useState } from "react";
import axios from "axios";

function Fetchingdata() {
  const [data, setdata] = useState(null);
  const [flag, setflag] = useState(false);

  useEffect(() => {
    if (flag) {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          console.log(response);
          setdata(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return () => {
      console.log("hello unmount");
    };
  }, [flag]);

  function onclickbtn() {
    setflag(!flag);
    console.log(flag);
  }

  return (
    <div>
      <button onClick={onclickbtn}>{flag ? "unfectch" : "fetch"}</button>
      {flag && data && (
        <ul>
          {data.map((ele, index) => {
            return <li key={index}>{ele.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default Fetchingdata;
