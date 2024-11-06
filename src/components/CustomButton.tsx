import Button, { ButtonType } from "antd/es/button";
import { ReactNode } from "react";

type Props = {
  title: ReactNode;
  type?: ButtonType;
  onclick: () => void;
  className?: string;
  icon?: ReactNode;
};

const CustomButton = (props: Props) => {
  return (
    <Button
      type={props.type}
      onClick={props.onclick}
      className={props.className}
    >
      {props.title}
      {props.icon && <span style={{ marginLeft: 0 }}>{props.icon}</span>}
    </Button>
  );
};

export default CustomButton;
