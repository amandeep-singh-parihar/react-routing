import React from "react";
import { useNavigate } from "react-router-dom";

function Labs() {
  const navigate = useNavigate();
  /* useNavigate() is a hook that gives access to the navigation function.
    It allows programmatic navigation without using <NavLink> or <Link>.
    It returns a function that can be used to change the URL. */

  function clickHandler() {
    //movd to about page
    navigate("/about");
  }
  return (
    <div>
      <h1 className="text-6xl font-bold">Virtual labs</h1>
      <div>
        <button
          onClick={clickHandler}
          className="px-3 bg-blue-400 rounded-full mt-4 text-xl font-bold"
        >
          Move to about page
        </button>
      </div>
    </div>
  );
}

export default Labs;
