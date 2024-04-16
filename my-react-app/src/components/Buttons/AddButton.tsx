import {useEffect, useRef } from 'react'
import clsx from 'clsx';

type Props = {
    ButtonColor:string;
    ButtonStyle:string;
}

const AddButton = ({ButtonColor, ButtonStyle}:Props) =>
{
  const bodyRef = useRef(document.body);
  
  const handleColor = (color: string) => {
    console.log(color);
    bodyRef.current.className = color;
  }
  
  //to change text-color freom (white, Balck) of the button, does not work
  let textColor = ButtonColor;
  useEffect(() => {
    if(textColor.includes("change-whilte-color"))
        {
            textColor += " text-slate-950";
        }
        else if (textColor.includes("change-black-color"))
        {
            textColor += " text-zinc-50";
        }
}, []);




/*
  const checkTextColor = (textColor) => {
    if(textColor.includes("change-whilte-color"))
    {
        textColor += " text-slate-950";
    }
    else if (textColor.includes("change-black-color"))
    {
        textColor += " text-zinc-50";
    }
  }
  */
  return(
    <>
    <button onClick={ () => handleColor(ButtonColor)} className={clsx(ButtonColor, ButtonStyle)} id="myButton"> Button Color Class: {ButtonColor} </button>
    </>
  )
}

export default AddButton;