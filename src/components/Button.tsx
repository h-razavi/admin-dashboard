import React from "react";

type Props = {
  color: string;
  bgColor: string;
  text: string;
  borderRadius: string;
  size: string;
};

const Button = ({ color, bgColor, text, borderRadius, size }: Props) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
