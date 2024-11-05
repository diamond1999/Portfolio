import Button, { ButtonType } from "antd/es/button";
import { ReactNode } from "react";

type Props = {
  title: ReactNode;
  type?: ButtonType;
  onclick: () => void;
  className?: string;
};

const CustomButton = (props: Props) => {
  return (
    <Button
      type={props.type}
      onClick={props.onclick}
      className={props.className}
    >
      {props.title}
    </Button>
  );
};

export default CustomButton;
