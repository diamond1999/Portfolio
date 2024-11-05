import { Link } from "react-router-dom";
import Nav from "./Nav";
import { Button } from "antd";

const Header = () => {
  return (
    <div>
      <header className="py-8 xl:py-12 text-white mx-28">
        <div className="container  flex justify-between items-center">
          <Link to={"/home"}>
            <h1 className="text-4xl font-semibold">
              Ajibola <span className="text-green-400">.</span>
            </h1>
          </Link>

          <div className="hidden xl:flex items-center gap-8">
            <Nav />

            <Link to={"/contact"}>
              <Button className="bg-green-400 text-black font-semibold text-md rounded-full border-none">
                Hire me
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
