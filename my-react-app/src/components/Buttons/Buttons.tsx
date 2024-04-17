import ColorfulButton from "./ColorfulButton";

const Buttons = () => {
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
  return (
    <div>
      {colorClasses.map((color, index) => (
        <ColorfulButton key={index} buttonColor={color} />
      ))}
    </div>
  );
};

export default Buttons;
