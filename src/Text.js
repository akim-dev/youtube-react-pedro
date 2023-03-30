import React from "react";
import { useState, useEffect } from "react";

export const Text = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("komponen di tempel");

    return () => {
      console.log("komponen di lepas");
    };
  }, []);
  //   aaray setelah  funtion return ber fungsi sebgai trigger untuk useeffect

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <h2>{text}</h2>
    </div>
  );
};
