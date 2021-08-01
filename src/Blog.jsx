import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { auth } from "./firebase";

let Blog = (props) => {
 
  let [post,setPost]=useState(undefined);

  useEffect(()=>{
      props.setPost(post);
  },[post]);

  return props.User ? (
    post == undefined ? (
      <>
        <div class="BlogDiv">
          <div class=" TitleDiv input-group mb-3">
            <input
              placeholder="Title"
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>

          <textarea
            rows="10"
            class="TextDiv form-control"
            placeholder="Have a Good Start!!"
            id="floatingTextarea"
          ></textarea>
        </div>

        <div class=" blog-btn-div">
          <button
            type="button"
            class=" SignOut btn btn-dark mt-3"
            onClick={() => auth.signOut()}
          >
            Sign Out
          </button>
          <button
            type="button"
            class=" Post btn btn-dark mt-3"
            onClick={() => {

                let title=document.querySelector("input").value;
                let text=document.querySelector("textarea").value;
                if(title==""||text=="")
                {
                    return ;
                }
                setPost({Title:title,Blog:text});
            }}
          >
            Post
          </button>
        </div>
      </>
    ) : (
      <Redirect  to="/post" />
    )
  ) : (
    <Redirect to="/login" />
  );
};

export default Blog;
