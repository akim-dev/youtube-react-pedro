import React from "react";

import { useState } from "react";
import { Text } from "./Text";

function Life() {
  const [showText, setshowText] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setshowText(!showText)}>Show text</button>
      {showText && <Text />}
    </div>
  );
}

export default Life;
