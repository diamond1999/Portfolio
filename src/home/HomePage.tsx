import Header from "../components/Header";
import { Button } from "antd";

import {
  DownloadOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const HomePage = () => {
  return (
    <div>
      <div className="">
        <Header />
      </div>

      <div className="text-white mx-28 mt-16">
        <div className="grid grid-cols-2 items-center">
          <div
            className="
          space-y-6"
          >
            <h3 className="font-semibold">Software Developer</h3>
            <h1 className="text-6xl">
              Hello I'm <br />
              <span className="text-green-400 font-semibold text-6xl">
                Ajibola Oladapo
              </span>{" "}
            </h1>
            <p className="max-w-[400px]">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>

            <div className="flex items-center gap-6">
              <Button className="bg-transparent text-green-400 border-green-400 rounded-full p-6 font-semibold text-lg">
                Download CV <DownloadOutlined />
              </Button>
              <Button className="bg-transparent text-green-400 border-green-400 rounded-full ">
                <GithubOutlined />
              </Button>
              <Button className="bg-transparent text-green-400 border-green-400 rounded-full">
                <LinkedinOutlined />
              </Button>
              <Button className="bg-transparent text-green-400 border-green-400 rounded-full ">
                <InstagramOutlined />
              </Button>
            </div>
          </div>

          <div className="">
            <div className=" flex justify-center bg-green-400/[0.2] rounded-full ">
              <img src="/photo.png" alt="" className="animate-spin-slow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
