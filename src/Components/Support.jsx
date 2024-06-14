import React from "react";
import { useNavigate } from "react-router-dom";

function Support() {
  const navigate = useNavigate();

  function clickHandler() {
    //move to about page
    navigate("/about");
  }

  function backHandler() {
    navigate(-1);
  }

  return (
    <div>
      <h1 className="text-6xl font-bold">
        We are always here for your support
      </h1>
      <div>
        <button
          onClick={clickHandler}
          className="px-3 bg-green-400 rounded-full text-xl font-bold"
        >
          move to about
        </button>
        <button onClick={backHandler} className="text-xl font-bold px-3 bg-green-500 rounded-full">GO back</button>
      </div>
    </div>
  );
}

export default Support;
