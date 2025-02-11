import React from "react";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Support from "./Components/Support";
import About from "./Components/About";
import Labs from "./Components/Labs";
import NotFound from "./Components/NotFound";
import MainHeader from "./Components/MainHeader";

function App() {
  return (
    <div className="App flex flex-col justify-center items-center mt-4">
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="text-2xl font-semibold">
              Home
            </NavLink>
            {/* NavLink is a component from react-router-dom that creates navigation links in your React application. It works similarly to the <a> tag in HTML but is specifically designed for single-page applications (SPAs) using React Router. */}

            {/*User-Friendly Navigation:

              The <Routes> only define how components should be rendered based on the URL.
              NavLink provides clickable links for users to change the URL dynamically.*/}
          </li>
          <li>
            <NavLink to="/support" className="text-2xl font-semibold">
              Support
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-2xl font-semibold">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/labs" className="text-2xl font-semibold">
              Labs
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home />} />
          {/* The index keyword means this is the default page when the user visits /. */}
          <Route path="/support" element={<Support></Support>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/labs" element={<Labs></Labs>} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Route>
      </Routes>
      {/* <Routes>:
          This component acts as a container for multiple <Route> elements.
          It ensures that only one matching route is rendered at a time. */}
    </div>
  );
}

export default App;
