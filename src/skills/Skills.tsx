import React from "react";
import Header from "../components/Header";
import { DoubleRightOutlined } from "@ant-design/icons";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="text-white">
      <div className="">
        <Header />
      </div>

      <div className="mt-4">
        <div className="">
          <div className="mx-28">
            <p className="text-xl flex items-center gap-2 text-green-400">
              <DoubleRightOutlined className="text-green-400" />
              Languages
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mx-28 mt-4 rounded-lg bg-gray-800 p-6">
            <div className="flex justify-center items-center rounded-full bg-gray-700">
              <p className="uppercase text-xl font-medium">html</p>
            </div>
            <div className="flex justify-center items-center rounded-full bg-gray-700 ">
              <p className="capitalize text-xl font-medium">JavaScript</p>
            </div>
            <div className="flex justify-center items-center rounded-full bg-gray-700 p-1">
              <p className="capitalize text-xl font-medium">TypeScript</p>
            </div>
            <div className="flex justify-center items-center rounded-full bg-gray-700 p-1">
              <p className=" text-xl font-medium">Node.js</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="mx-28">
            <p className="text-xl flex items-center gap-2 text-green-400">
              <DoubleRightOutlined className="text-green-400" />
              Styling
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mx-28 mt-4 rounded-lg bg-gray-800 p-6">
            <div className="flex justify-center items-center rounded-full bg-gray-700">
              <p className="uppercase text-xl font-medium">css</p>
            </div>
            <div className="flex justify-center items-center rounded-full bg-gray-700 ">
              <p className="capitalize text-xl font-medium">sass</p>
            </div>
            <div className="flex justify-center items-center rounded-full bg-gray-700 p-1">
              <p className="capitalize text-xl font-medium">tailwind css</p>
            </div>
            <div className="flex justify-center items-center rounded-full bg-gray-700 p-1">
              <p className="text-xl font-medium">AntD</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="mx-28">
            <p className="text-xl flex items-center gap-2 text-green-400">
              <DoubleRightOutlined className="text-green-400" />
              Frameworks
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mx-28 mt-4 rounded-lg bg-gray-800 p-6">
            <div className="flex justify-center items-center rounded-full bg-gray-700 p-1">
              <p className=" text-xl font-medium">React.js</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="mx-28">
            <p className="text-xl flex items-center gap-2 text-green-400">
              <DoubleRightOutlined className="text-green-400" />
              Design
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mx-28 mt-4 rounded-lg bg-gray-800 p-6">
            <div className="flex justify-center items-center rounded-full bg-gray-700 p-1">
              <p className=" text-xl font-medium">Figma</p>
            </div>
            <div className="flex justify-center items-center rounded-full bg-gray-700">
              <p className=" text-xl font-medium">Adobe XD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
