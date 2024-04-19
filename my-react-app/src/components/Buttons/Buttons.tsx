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

  return (
    <div className="container">
      <h1 className="m-4 text-2xl font-bold">{layout}</h1>
      <div className={layoutClass}>
        {colorClasses.map((color, index) => (
          <ColorfulButton key={index} buttonIndex={index} buttonColor={color} />
        ))}
      </div>
    </div>
  );
};

export default Buttons;
