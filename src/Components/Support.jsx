import React from "react";
import { useNavigate } from "react-router-dom";

function Support() {
  const navigate = useNavigate();
  /* useNavigate() is a hook that gives access to the navigation function.
    It allows programmatic navigation without using <NavLink> or <Link>.
    It returns a function that can be used to change the URL. */

  function clickHandler() {
    //move to about page
    navigate("/about");
  }

  function backHandler() {
    navigate(-1);
  }

  function dangerHanlder() {
    navigate("*");
  }

  return (
    <div>
      <h1 className="text-6xl font-bold">
        We are always here for your support.
      </h1>
      <div>
        <button
          onClick={clickHandler}
          className="px-3 bg-green-600 rounded-full text-xl font-bold capitalize text-white mr-4"
        >
          move to about
        </button>
        <button
          onClick={backHandler}
          className="text-xl font-bold px-3 bg-green-500 rounded-full"
        >
          GO back
        </button>

        <button
          onClick={dangerHanlder}
          className="text-xl px-3 bg-[#ff0217] rounded-full ml-10 mt-2 text-white font-black"
        >
          Dont't Click!
        </button>
      </div>
    </div>
  );
}

export default Support;
