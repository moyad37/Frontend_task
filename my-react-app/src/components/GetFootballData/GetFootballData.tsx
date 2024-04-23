import { useState, useEffect } from "react";
import FootballDataItem from "./FootballDataItem";

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

const GetFootballData = () => {
  const [data, setData] = useState<FootballData[] | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://freetestapi.com/api/v1/footballs")
      .then((Response) => {
        if (!Response.ok) {
          throw new Error("Network response was not ok");
        }
        return Response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container flex flex-row flex-wrap">
      {data &&
        data.map((item: FootballData, index: number) => (
          <FootballDataItem key={index} data={item} />
        ))}
    </div>
  );
};

export default GetFootballData;
