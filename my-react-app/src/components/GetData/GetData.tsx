import { useState, useEffect } from "react";
import DataItem from "./DataItem";

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

const GetData = () => {
  const [data, setData] = useState<Data[] | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://freetestapi.com/api/v1/movies")
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
        data.map((item: Data, index: number) => (
          <DataItem key={index} data={item} />
        ))}
    </div>
  );
};

export default GetData;
