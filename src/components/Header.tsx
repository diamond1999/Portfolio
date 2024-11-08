import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Nav from "./Nav";

const Header = () => {
  const [] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  
  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <div>
      <header className="py-8 xl:mx-28 xl:py-12 text-white mx-4 md:mx-12 lg:mx-28 ">
        <div className="flex md:flex-row justify-between items-center">
         
          <div className="sm:flex w-full items-center justify-between mx-4">
          <Link to={"/home"} className="text-center md:text-left">
            <h1 className="text-4xl sm:text-2xl font-semibold">
              AJ <span className="text-green-400">.</span>
            </h1>
          </Link>

          
          <button
            className="xl:hidden md:hidden text-white"
            onClick={showDrawer}
            aria-label="Open menu"
          >
            <MenuOutlined className="text-2xl" />
          </button>
          </div>
          

         
          <div className="sm:hidden md:flex xl:flex items-center gap-8 mt-6 md:mt-0">
            
            <Nav />

           
            <Link to={"/contact"}>
              <Button className="bg-green-400 text-black font-semibold text-md rounded-full border-none w-full md:w-auto mt-4 md:mt-0">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </header>

     
      <Drawer
        title="Ajibola Oladapo"
        placement="right"
        onClose={closeDrawer}
        visible={drawerVisible}
        closable={true}
        width={250}
      >
        <Menu mode="vertical" className="text-black">
          <Menu.Item key="home">
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="skills">
            <Link to="/skills">Skills</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default Header;
