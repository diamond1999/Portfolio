import { ExternalLink } from "lucide-react";
import CustomButton from "../components/CustomButton";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="">
        <Header />
      </div>

      <div className="text-white sm:-mt-16 flex flex-col items-center gap-4 justify-center md:mx-20">
        <div className="mt-28 flex flex-col items-center gap-2">
          <p className="text-2xl sm:text-lg md:text-xl  font-medium">Hey, I'm</p>
          <h1 className="text-4xl sm:text-2xl font-bold">AJIBOLA OLADAPO</h1>
          <p className="text-green-400 font-medium sm:text-lg text-2xl">
            Frontend Developer
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-gray-400 font-medium sm:mx-10">
          <p className="border-r border-white md:text-xl pr-2">
            HTML
          </p>
          <p className="border-r border-white  md:text-xl pr-2">CSS</p>
          <p className="border-r border-white  md:text-xl pr-2">
            Tailwind CSS
          </p>
          <p className="border-r border-white  md:text-xl pr-2">
            JavaScript
          </p>
          <p className="border-r border-white  md:text-xl pr-2">
            TypeScript
          </p>
          <p className=" md:text-xl">React.JS</p>
        </div>

        <div className="mt-8 flex gap-4">
          <Link to={"https://drive.google.com/file/d/1XN5mlquqQbPOW8euOmoTCqp-lqwn-oSg/view?usp=drive_link"}>
          <CustomButton
            title={"My Resume"}
            onclick={function (): void {
              throw new Error("Function not implemented.");
            }}
            className="bg-gray-600 text-gray-200 border-none font-semibold hover:!bg-green-400 hover:!text-black"
            icon={<ExternalLink />}
          />
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
