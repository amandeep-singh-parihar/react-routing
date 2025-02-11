import React from "react";
import { Outlet } from "react-router-dom";

function MainHeader() {
  return (
    <div>
      <Outlet />
      {/* 
          <Outlet /> renders child routes dynamically.
          When a user visits /, MainHeader is rendered first.
          Inside MainHeader, <Outlet /> is replaced with the corresponding child route (e.g., Home, Support, About, etc.).
          For example:
          /support → MainHeader renders, and inside it, Support is displayed.
          /about → MainHeader renders, and inside it, About is displayed. 
      */}
    </div>
  );
}

export default MainHeader;
