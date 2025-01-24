interface TimerProps {
  counter: number;
  unit: string;
}

import React from "react";

const Timer = ({ counter, unit }: TimerProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-20 h-20 border-grey-light border-2 ">
      <h1 className="font-bold text-xl">{counter}</h1>
      <p>{unit.toUpperCase()}</p>
    </div>
  );
};

export default Timer;
