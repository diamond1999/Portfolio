import { ReactNode } from "react";
import Header from "./Header";

const Layout = (props: { children: ReactNode }) => {
  return (
    <div>
      <div className="">
        <Header />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
