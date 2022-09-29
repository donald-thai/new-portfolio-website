import React from "react";
import useLocalStorage from "use-local-storage";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import About from "./screens/About";
import Contact from "./screens/Contact";
import NotFound from "./screens/NotFound";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='' element={<Home />}/>
          <Route path='projects' element={<Projects />}>
            
          </Route>
          <Route path='about' element={<About />}/>
          {/* <Route path='contact' element={<Contact />}/> */}
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
