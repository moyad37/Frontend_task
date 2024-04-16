import { useEffect, useState} from 'react';
import AddButton from './AddButton';


const Buttons = () =>
{
    const colorsClasses = [
        "bg-red-400",
        "bg-blue-400",
        "bg-green-400",
        "bg-stone-50 change-white-color",
        "bg-slate-800 change-black-color",
        "bg-orange-400",
        "bg-yellow-400",
        "bg-pink-400",
        "bg-purple-400",
        "bg-teal-400"
    ];

    const [buttonStyle, setButtonStyle] = useState(["p-8", "m-4" ,"border-2", "rounded-lg", "hover:-translate-y-6"]);

    //to change text-color freom (white, Balck) of the button, does not work
    useEffect(() => {
        if(colorsClasses.some(color => color.includes("change-black-color"))) {
            setButtonStyle(prev => ["text-zinc-50", ...prev]);
        }
        if(colorsClasses.some(color => color.includes("change-white-color"))) {
            setButtonStyle(prev => ["text-slate-950", ...prev]);
        }
    }, []);

    return (
        <div>
            {colorsClasses.map((color, index) => (
                <AddButton
                key={index}
                ButtonColor={color}
                ButtonStyle={buttonStyle.join(' ')
            } />
            ))}
        </div>
    )
}

export default Buttons;
    {/*
      <AddButton class="bg-red-400"/>
      <AddButton class="bg-blue-400"/>
      <AddButton class="bg-green-400"/>
      <AddButton class="bg-stone-50 border-2 border-black-600 text-slate-800"/>
      <AddButton class="bg-slate-800 border-2 border-white-600 text-zinc-50"/>
      <AddButton class="bg-orange-400"/>
      <AddButton class="bg-yellow-400"/>
      <AddButton class="bg-pink-400"/>
      <AddButton class="bg-purple-400"/>
      <AddButton class="bg-teal-400"/>
    */}