import { useState } from "react";
import clsx from "clsx";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement("#root");

type Data = {
  id: number;
  title: string;
  year: string;
  genre: string;
  director: string;
  actors: string;
  language: string;
  production: string;
  website: string;
};

type Props = {
  data: Data;
};

const DataItem = ({ data }: Props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        key={data.id}
        className="p-8 border-2 rounded-lg hover:bg-zinc-200 duration-15 basis-full md:basis-2/4 lg:basis-1/4 hover:scale-110"
      >
        <h1 className="font-bold">{data.title}</h1>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 w-fit border-2 rounded-lg bg-slate-300 p-10"
      >
        <ul>
          <li className="text-cyan-600 font-bold text-xl">
            {"Year : "}
            <span className="text-cyan-700 ">{data.year}</span>
          </li>

          <li className="text-cyan-600 font-bold text-xl">
            {"Genre : "}
            <span className="text-cyan-700">{data.genre}</span>
          </li>

          <li className="text-cyan-600 font-bold text-xl">
            {"Director : "}
            <span className="text-cyan-700">{data.director}</span>
          </li>

          <li className="text-cyan-600 font-bold text-xl">
            {"Actors : "}
            <span className="text-cyan-700">{data.actors}</span>
          </li>

          <li className="text-cyan-600 font-bold text-xl">
            {"Language : "}
            <span className="text-cyan-700">{data.language}</span>
          </li>

          <li className="text-cyan-600 font-bold text-xl">
            {"Production : "}
            <span className="text-cyan-700">{data.production}</span>
          </li>

          <li>
            {" "}
            <a
              className=" text-blue-600 visited:text-purple-600  text-md"
              href={data.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Link to Website"}
            </a>
          </li>
        </ul>
        <button
          onClick={() => setIsOpen(false)}
          className=" absolute top-4 right-6"
        >
          <FontAwesomeIcon
            className="hover:text-red-600 hover:text-xl border-2 p-2 rounded-lg"
            icon={faTimes}
          />
        </button>
      </Modal>
    </>
  );
};

export default DataItem;
