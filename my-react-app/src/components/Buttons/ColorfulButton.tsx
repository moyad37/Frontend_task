import clsx from "clsx";
//import { useRef } from "react";
type Props = {
  buttonColor: string;
  buttonIndex: number;
  onChangeBackgroundColor: (color: string) => void;
};

const ColorfulButton = ({
  buttonIndex,
  buttonColor,
  onChangeBackgroundColor,
}: Props) => {
  const handleColor = (color: string) => {
    console.log(color);
    onChangeBackgroundColor(color);
  };
  const textColor = buttonColor.includes("slate-800")
    ? "text-white"
    : undefined;
  return (
    <button
      onClick={() => handleColor(buttonColor)}
      className={clsx(
        "p-8 border-2 rounded-lg hover:-translate-y-1 duration-15 basis-full md:basis-2/4 lg:basis-1/4",
        buttonColor,
        textColor
      )}
    >
      Index: {buttonIndex}
    </button>
  );
};

export default ColorfulButton;
