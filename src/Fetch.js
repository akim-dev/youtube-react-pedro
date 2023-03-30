import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

export const Fetch = () => {
  const [catFact, setCatFact] = useState("");
  const [name, setName] = useState("");
  const [umur, setUmur] = useState(0);

  //   fetch("https://catfact.ninja/fact")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });

  //   dengan axios
  //   Axios.get("https://catfact.ninja/fact").then((res) =>
  //     setCatFact(res.data.fact)
  //   );

  const cariData = () => {
    Axios.get("https://catfact.ninja/fact").then(
      (res) => setCatFact(res.data.fact)
      //   console.log(res.data.length)
    );
  };

  useEffect(() => {
    cariData();
  }, []);

  const cekUmur = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((response) => {
      setUmur(response.data.age);
    });
  };

  //   useEffect(() => {
  //     cekUmur();
  //   }, []);

  return (
    <div className="App">
      <button onClick={cariData}>Generate data</button>
      <p>{catFact}</p>
      <button onClick={cekUmur}>Cek Umur</button>
      <input
        type="text"
        placeholder="Name ...."
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h4>
        Umur {name} adalah : {umur}
      </h4>
    </div>
  );
};
