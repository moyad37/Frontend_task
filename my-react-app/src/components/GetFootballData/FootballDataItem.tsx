import { useState } from "react";
import clsx from "clsx";

type FootballData = {
  id: number;
  name: string;
  country: string;
  founded: number;
  stadium: string;
  coach: string;
  captain: string;
  league: string;
  players: number;
};

type Props = {
  data: FootballData;
};

const FootballDataItem = ({ data }: Props) => {
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
      <h1 className="font-bold">{data.name}</h1>
      <ul
        className={clsx(
          "absolute top-full left-2 rounded-lg bg-red-200",
          showData && "p-3"
        )}
      >
        <li>{showData && "Country : " + data.country}</li>
        <li>{showData && "Founded : " + data.founded}</li>
        <li>{showData && "Stadium : " + data.stadium}</li>
        <li>{showData && "Coach : " + data.coach}</li>
        <li>{showData && "Captain : " + data.captain}</li>
        <li>{showData && "League :" + data.league}</li>
        <li>{showData && "Players :" + data.players}</li>
      </ul>
    </button>
  );
};

export default FootballDataItem;
