import { ExternalLink } from "lucide-react";
import CustomButton from "../components/CustomButton";
import Header from "../components/Header";
import { Button } from "antd";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <div className="">
        <Header />
      </div>

      <div className="container text-white flex flex-col items-center gap-4 justify-center">
        <div className="mt-28 flex flex-col items-center gap-2">
          <p className="text-2xl font-medium">Hey, I'm</p>
          <h1 className="text-4xl font-bold">AJIBOLA OLADAPO</h1>
          <p className="text-green-400 font-medium text-2xl">
            Frontend Developer
          </p>
        </div>
        <div className="flex items-center gap-6 text-gray-400 font-medium">
          <p className="border-r border-white text-base md:text-xl pr-6">
            HTML
          </p>
          <p className="border-r border-white text-base md:text-xl pr-6">CSS</p>
          <p className="border-r border-white text-base md:text-xl pr-6">
            Tailwind CSS
          </p>
          <p className="border-r border-white text-base md:text-xl pr-6">
            JavaScript
          </p>
          <p className="border-r border-white text-base md:text-xl pr-6">
            TypeScript
          </p>
          <p className="text-base md:text-xl">React.JS</p>
        </div>

        <div className="mt-8 flex gap-4">
          <CustomButton
            title={"My Resume"}
            onclick={function (): void {
              throw new Error("Function not implemented.");
            }}
            className="bg-gray-600 text-gray-200 border-none font-semibold hover:!bg-green-400 hover:!text-black"
            icon={<ExternalLink />}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
