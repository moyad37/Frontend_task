import ColorfulButton from "./ColorfulButton";

type Props = {
  layout?: string;
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
  const layoutClass = () => {
    if (layout === "flex") {
      return "flex flex-column flex-wrap";
    } else if (layout === "grid") {
      return "grid grid-cols-3";
    } else {
      return undefined;
    }
  };

  return (
    <div className="container">
      <h1 className="m-4 text-2xl font-bold">
        {layout === "grid" || layout === "flex" ? layout : ""}
      </h1>
      <div className={layoutClass()}>
        {colorClasses.map((color, index) => (
          <ColorfulButton key={index} buttonIndex={index} buttonColor={color} />
        ))}
      </div>
    </div>
  );
};

export default Buttons;
