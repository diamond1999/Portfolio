import React from "react";
import Header from "../components/Header";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div>
      <div className="">
        <Header />
      </div>

      <div className="text-white">
        <div className="">
          <h2>Let's work together</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            aspernatur minima voluptate facere sequi nisi tenetur odit, vero
            nesciunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;