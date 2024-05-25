import React, { useState, useRef, useEffect } from "react";

function Focusinput() {
  const inputfocus = useRef(null);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    if (flag) {
      inputfocus.current.focus();
    }
  }, [flag]);

  return (
    <div>
      <button onClick={() => setFlag(!flag)}>
        {flag ? "unmount" : "mount"}
      </button>
      {flag && <input ref={inputfocus} type="text" />}
    </div>
  );
}

export default Focusinput;
