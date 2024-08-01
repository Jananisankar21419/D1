"use client";

import React from "react";

const NeubrutalismButton = () => {
  return (
    <button
      onClick={() => console.log("You did it!")}
      className={"group/button rounded-lg bg-[#1330BE]  text-white "}
    >
      <span
        className={
          "block -translate-x-1 -translate-y-1 rounded-lg border-2 border-white bg-[#1330BE] px-7 py-3 text-l font-mono tracking-tight transition-all group-hover/button:-translate-y-2 group-active/button:translate-x-0 group-active/button:translate-y-0"
        }
      >
        Send
      </span>
    </button>
  );
};

export default NeubrutalismButton;
