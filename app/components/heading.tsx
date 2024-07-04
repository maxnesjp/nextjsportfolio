import React from "react";

type props = {
  title: string;
};

const Heading = ({ title }: props) => {
  return <h2 className="text-3xl font-medium capitalize mb-8">{title}</h2>;
};

export default Heading;
