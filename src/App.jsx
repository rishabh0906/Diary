import { useEffect, useState } from "react";

import Blog from "./Blog";
import Login from "./Login";
import Posts from "./Posts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import css from "./App.css";


let App = () => {
  let [User, setUser] = useState(null);
  let [post,setPost]=useState({});

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login User={User} setUser={setUser} />
        </Route>
        <Route path="/blog">
          <Blog User={User} setPost={setPost} />
        </Route>
        <Route path="/post">
          <Posts User={User} post={post} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
