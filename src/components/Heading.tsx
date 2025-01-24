interface Title {
  title: string;
}

import React from "react";

const Heading = ({ title }: Title) => {
  return <h1 className="text-3xl">{title}</h1>;
};

export default Heading;
