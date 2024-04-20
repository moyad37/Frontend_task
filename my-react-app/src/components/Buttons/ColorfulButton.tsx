import { useRef } from "react";
import clsx from "clsx";

type Props = {
  buttonColor: string;
  buttonIndex: number;
};

const ColorfulButton = ({ buttonIndex, buttonColor }: Props) => {
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
        "p-8 border-2 rounded-lg hover:-translate-y-2 duration-15 basis-full md:basis-2/4 lg:basis-1/4",
        buttonColor,
        textColor
      )}
    >
      Index: {buttonIndex}
    </button>
  );
};

export default ColorfulButton;
