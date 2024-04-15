import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//type component


function AddButton(props: { class: string; })
{
  const bodyRef = useRef(document.body);
  
  const handleColor = (color: string) => {
    console.log(color);
    bodyRef.current.className = color;
  }
  return(
    <>
    <button onClick={ () => handleColor(props.class)} className={props.class} id="myButton"> ClassName : {props.class.substring(3)} </button>
    </>
  )
}

function Buttons()
{
  return(
    <>
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
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Buttons/>
    </>
  )
}

export default App
