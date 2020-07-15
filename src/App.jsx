import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/header/Header";
import Details from "./components/details/Details";
import Image from "./components/Image";
import { BASE_URL, API_KEY } from "./constants";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    // this code runs after DOM surgery

    axios
      .get(`${BASE_URL}api_key=${API_KEY}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        debugger;
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Image data={data} />
      <Details data={data} />
    </div>
  );
}

export default App;
