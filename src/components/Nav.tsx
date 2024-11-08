import { Link } from "react-router-dom";

const links = [
  {
    name: "home",
    path: "/home",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "skills",
    path: "/skills",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  return (
    <div className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            to={link.path}
            key={index}
            className={
              "capitalize font-medium hover:text-green-400 transition-all"
            }
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
