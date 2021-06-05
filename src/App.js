// import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Movies from "./Movies";
import { useState } from "react";
import requests from "./request";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  const [user, setUser] = useState(false);
  // const location = Location();
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home user={user} setUser={setUser} />
        </Route>
        <Route path="/home">
          <Header user={user} setUser={setUser} />
          <Nav setSelectedOption={setSelectedOption} />
          <Movies selectedOption={selectedOption} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
