import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import firebase from "./firebase";
import { firestore } from "./firebase";

let Posts = (props) => {
  let [back, setback] = useState(false);
  let [AllPosts, setAll] = useState([]);
  console.log(AllPosts);
  useEffect(() => {
    // Pending //
    // Ni Horha //
    // backend ni horha bs//
  }, []);

  return back == false ? (
    <>
      <ul>
        {AllPosts.map((ele) => {
          return (
            <li>
              <h1>{ele.Title}</h1>
              <p> {ele.Blog}</p>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        class="  btn btn-dark mt-3"
        onClick={() => setback(true)}
      >
        Back
      </button>
    </>
  ) : (
    <Redirect to="/blog"></Redirect>
  );
};
export default Posts;
