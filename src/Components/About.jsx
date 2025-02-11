import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navi = useNavigate();
  /* useNavigate() is a hook that gives access to the navigation function.
    It allows programmatic navigation without using <NavLink> or <Link>.
    It returns a function that can be used to change the URL. */

  function clickHandler() {
    //move to support page
    navi("/support");
  }

  return (
    <div>
      <div>
        <h1 className="text-6xl font-bold">This is about page</h1>
      </div>
      <button
        onClick={clickHandler}
        className="px-3 bg-blue-500 rounded-full text-xl font-bold"
      >
        Move to support page
      </button>
    </div>
  );
}

export default About;
