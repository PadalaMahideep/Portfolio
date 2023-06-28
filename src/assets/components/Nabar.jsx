import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  const [change, setchange] = useState(false);

  const links = [
    {
      id: "1",
      link: "Main",
      offset: -100,
    },
    {
      id: "2",
      link: "About",
      offset: 400,
    },
    {
      id: "3",
      link: "Projects",
      offset: -100,
    },
    {
      id: "1",
      link: "contact",
      offset: -100,
    },
  ];
  return (
    <div>
      <nav className="Navbarstyle">
        <h3 className="logo">Mahideep</h3>
        <ul
          className={change ? "nav-links-mobile" : "nav-links"}
          onClick={() => setchange(false)}
        >
          {links.map(({ id, link, offset }) => (
            <li key={id}>
              {" "}
              <Link to={link} smooth={true} offset={offset} duration={600}>
                {" "}
                {link}{" "}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="buton"
          className="mobile-menu-icon"
          onClick={() => {
            setchange(!change);
          }}
        >
          {" "}
          {change ? (
            // eslint-disable-next-line react/no-unknown-property
            <i class=" medium material-icons">clear</i>
          ) : (
            // eslint-disable-next-line react/no-unknown-property
            <i class=" medium material-icons">dehaze</i>
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
