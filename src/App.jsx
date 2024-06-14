import React from "react";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Support from "./Components/Support";
import About from "./Components/About";
import Labs from "./Components/Labs";
import NotFound from "./Components/NotFound";
import { Link } from "react-router-dom";
import MainHeader from "./Components/MainHeader";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="text-2xl font-semibold">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support" className="text-2xl font-semibold">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-2xl font-semibold">About</NavLink>
          </li>
          <li>
            <NavLink to="/labs" className="text-2xl font-semibold">Labs</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path="/support" element={<Support></Support>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/labs" element={<Labs></Labs>} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
