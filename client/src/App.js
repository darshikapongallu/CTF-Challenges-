import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Challenges from "./components/Challenges";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const [login, setLogin] = useState({
    group: "",
    password: "",
  });
  const onChange = (e) => {
    const { value, name } = e.target;
    setLogin(() => {
      return {
        ...login,
        [name]: value,
      };
    });
  };
  let navigate = useNavigate();
  console.log(navigate)
  const getData = async (e) => {
    e.preventDefault();
    const { group, password } = login;
    const data = await fetch("/login1", {
      method: "POST",
      headers: {
        Accept: "application",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    let res = await data.json();
    res.filter((element) => {
      if (element.group === group && element.password === password) {
        return <Redirect to="/"/>;
      } else {
        return false;
      }
    });
    // history.pushState("/")
    // console.log(get.length?"yes":"no");
    setLogin({
      group: "",
      password: "",
    });
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login
            group={login.group}
            password={login.password}
            onChange={onChange}
            getData={getData}
          />
        </Route>
        <Route exact path="/challenges">
          <Challenges />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
