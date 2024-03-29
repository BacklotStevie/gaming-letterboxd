import logo from "./logo.svg";
import "./App.css";

import { Switch, Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import actions from "./Components/api";
import Home from "./Components/Home";
import Header from './Components/header'


function App() {
  const [testAPI, setTestAPI] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.rawg.io/api/games?key=a02052f5db174e5fa2a69a1c6ef9d72e&dates=2019-09-01,2019-09-30&platforms=18,1,7`
  //     )
  //     .then((res) => {
  //       console.log(res.data.results);
  //       setTestAPI(res.data.results);
  //     });
  // }, []);

  const ShowGames = () => {
    return testAPI.map((game) => {
      return <div key={game.name}>{game.name}</div>;
    });
  };

  return (
    <div className="App">
      <div className="body-container">
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => <Home />} />
        </Switch>
      </div>
      {/* <ShowGames /> */}
    </div>
  );
}

export default App;
