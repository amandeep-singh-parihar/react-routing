import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navi = useNavigate();

  function clickHandler() {
    //move to support page
    navi("/support");
  }

  return (
    <div>
      <div><h1 className="text-6xl font-bold">This is about page</h1></div>
      <button onClick={clickHandler} className="px-3 bg-blue-500 rounded-full text-xl font-bold">
        Move to support page
      </button>
    </div>
  );
}

export default About;
