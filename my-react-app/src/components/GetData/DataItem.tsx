import { useState } from "react";
import clsx from "clsx";

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
  const [showData, setShowData] = useState(false);
  console.log(data);
  return (
    <button
      onClick={() => setShowData(!showData)}
      key={data.id}
      className={clsx(
        "p-8 border-2 rounded-lg hover:bg-zinc-200 duration-15 basis-full md:basis-2/4 lg:basis-1/4",
        showData ? "relative" : ""
      )}
    >
      <h1 className="font-bold">{data.title}</h1>
      <ul
        className={clsx(
          "absolute top-full left-2 rounded-lg bg-red-200",
          showData && "p-3"
        )}
      >
        <li>{showData && "year : " + data.year}</li>
        <li>{showData && "genre : " + data.genre}</li>
        <li>{showData && "director : " + data.director}</li>
        <li>{showData && "actors : " + data.actors}</li>
        <li>{showData && "language : " + data.language}</li>
        <li>{showData && "production :" + data.production}</li>
        <li>
          {" "}
          <a
            className="text-blue-600 visited:text-purple-600"
            href={data.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {showData && "Link to Website"}
          </a>
        </li>
      </ul>
    </button>
  );
};

export default DataItem;
