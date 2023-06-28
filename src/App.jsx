/* eslint-disable react/no-unknown-property */

import "./assets/components/Navbar.css";
import "./assets/components/Main.css";
import { useEffect, useState } from "react";
import Main from "./assets/components/Main";
import Navbar from "./assets/components/Nabar";
import About from "./assets/components/About";
import Projects from "./assets/components/Projects";

import Contact from "./Contact";

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <>
          {" "}
          <span className="loader"></span>
        </>
      ) : (
        <>
          <Navbar />
          <Main />
          <About />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
