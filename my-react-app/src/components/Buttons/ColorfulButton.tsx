import { useRef } from "react";
import clsx from "clsx";

type Props = {
  buttonColor: string;
};

const ColorfulButton = ({ buttonColor }: Props) => {
  const bodyRef = useRef(document.body);

  const handleColor = (color: string) => {
    console.log(color);
    bodyRef.current.className = color;
  };
  const textColor = buttonColor.includes("slate-800")
    ? "text-white"
    : undefined;
  return (
    <button
      onClick={() => handleColor(buttonColor)}
      className={clsx(
        "p-8 m-4 border-2 rounded-lg hover:-translate-y-2 duration-15",
        buttonColor,
        textColor
      )}
    >
      Button Color Class: {buttonColor}
    </button>
  );
};

export default ColorfulButton;
