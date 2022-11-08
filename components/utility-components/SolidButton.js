import React from "react";

function SolidButton({ text }) {
  return (
    <button className="border-2 rounded-lg py-2 px-5 font-bold text-[white] bg-[black]">
      {text}
    </button>
  );
}

export default SolidButton;
