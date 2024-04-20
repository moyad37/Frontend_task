import clsx from "clsx";
import { useState } from "react";
import ColorfulButton from "./ColorfulButton";

type Props = {
  layout?: "flex" | "grid";
};

const Buttons = ({ layout }: Props) => {
  const colorClasses = [
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-stone-50",
    "bg-slate-800",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-pink-400",
    "bg-purple-400",
    "bg-teal-400",
  ];

  const layoutClass =
    layout === "flex"
      ? "flex flex-column flex-wrap"
      : "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  const [containerColor, setContainerColor] = useState("");

  return (
    <div
      className={clsx(
        "container w-full p-6 rounded-xl border-2",
        containerColor
      )}
    >
      <h1
        className={clsx(
          "m-4 text-2xl font-bold",
          containerColor === "bg-slate-800" ? "text-white" : ""
        )}
      >
        {layout}
      </h1>
      <div className={layoutClass}>
        {colorClasses.map((color, index) => (
          <ColorfulButton
            key={index}
            buttonIndex={index}
            buttonColor={color}
            onButtonClick={() => {
              setContainerColor(color);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Buttons;
