import { useState } from "react";
import Header from "../components/Header";
import SideNav from "./SideNav";
import Details from "./Details";

const ResumePage = () => {
  const [currentView, setCurrentView] = useState("experience");

  console.log(currentView);
  return (
    <div>
      <div className="">
        <Header />
      </div>

      <div className="grid grid-cols-3 gap-8 mx-28">
        <SideNav
          currentView={currentView}
          title={""}
          setCurrentView={setCurrentView}
        />

        {currentView.toLowerCase() === "experience" && <Details />}
        {currentView.toLowerCase() === "education" && (
          <div className="text-white">Education</div>
        )}
      </div>
    </div>
  );
};

export default ResumePage;
