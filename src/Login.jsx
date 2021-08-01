import { useEffect } from "react";

import { auth, SignInWithGoogle } from "./firebase";
import { Redirect } from "react-router-dom";

let Login = (props) => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
        if(user)
        {
      props.setUser({
        name: user.displayName,
        email: user.email,
        id: user.uid,
      });
    }
    else{
        props.setUser(user);
    }
    });
  }, []);

  return props.User ? (
    <Redirect to="/blog" />
  ) : (
    <div class="login">
      <h1>Personal Diary</h1>
      <button
        type="button"
        class="btn btn-dark mt-3"
        onClick={() => SignInWithGoogle()}
      >
        Sign In
      </button>
    </div>
  );
};

export default Login;
