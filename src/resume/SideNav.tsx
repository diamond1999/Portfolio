import { twMerge } from "tailwind-merge";
import CustomButton from "../components/CustomButton";

type Props = {
  title: string;
  setCurrentView: (arg: string) => void;
  currentView: string;
};

const buttons = [
  {
    title: "Experience",
    className: "bg-green-400 border-none font-medium",
  },
  {
    title: "Education",
    className: "bg-gray-800 text-white border-none font-medium",
  },
  {
    title: "Skills",
    className: "bg-gray-800 text-white border-none font-medium",
  },
  {
    title: "About me",
    className: "bg-gray-800 text-white border-none font-medium",
  },
];

const SideNav = (props: Props) => {
  return (
    <div className="text-white col-span-1">
      <div className="space-y-3">
        <h1 className="text-4xl font-semibold">Why hire me?</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        {buttons.map((button, index) => (
          <CustomButton
            key={index}
            title={button.title}
            className={twMerge(
              "bg-gray-800 text-white border-none font-medium",
              props.currentView.toLowerCase() === button.title.toLowerCase() &&
                "!bg-green-400"
            )}
            onclick={() => props.setCurrentView(button.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default SideNav;
