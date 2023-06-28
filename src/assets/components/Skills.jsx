import cssimage from "./Images/css (1).png";
import gitimage from "./Images/git (1).png";
import javaimage from "./Images/java.png";
import python from "./Images/python (1).png";
import Reactimage from "./Images/physics.png";
import javascriptimage from "./Images/java-script.png";
import sassimg from "./Images/sass.png";
import htmlimg from "./Images/html.png";

import { useSpring, animated } from "react-spring";
import { useState } from "react";
const project = [
  {
    id: 1,
    title: "Html",
    image: htmlimg,
  },
  {
    id: 2,
    title: "Css",
    URL: "https://github.com/PadalaMahideep/tic-tac-toe",
    image: cssimage,
  },
  {
    id: 3,
    title: "Sass",
    image: sassimg,
  },
  {
    id: 4,
    title: "JavaScript",
    image: javascriptimage,
  },
  {
    id: 5,
    title: "Python",
    image: Reactimage,
  },
  {
    id: 6,
    title: "Java",
    URL: "https://github.com/PadalaMahideep/Cross-site-scripting-xss",
    image: javaimage,
  },
  {
    id: 7,
    title: "Python",
    image: python,
  },
  {
    id: 8,
    title: "Git",
    URL: "https://github.com/PadalaMahideep/box_office",
    image: gitimage,
  },
];

const Skills = () => {
  const [flip, setflip] = useState(false);

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
    onRest: () => setflip(!flip),
  });
  return (
    <>
      <div className="skillcard">
        <h1>Skills </h1>
        <div className="skills">
          {project.map(({ id, title, image }) => (
            <animated.div style={props} key={id}>
              <div className="onecard">
                <img src={image}></img>
                <p>{title}</p>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
