//import { useState, useEffect } from "react";
import DataItem from "./DataItem";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

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
  //Using Axios & Tanstack query
  const queryClient = useQueryClient();
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get("https://freetestapi.com/api/v1/movies");
      queryClient.invalidateQueries(["posts"]);
      const data = await response.data;
      return data;
    },
  });
  const refreshData = async () => {
    await queryClient.invalidateQueries(["posts"]);
  };

  if (postQuery.isLoading) return <h1>Loading....</h1>;
  if (postQuery.isError) return <h1>Error loading data!!!</h1>;

  return (
    <>
      <button
        onClick={refreshData}
        className="bg-red-300 border-2 p-7 rounded-2xl my-3 hover:bg-red-400"
      >
        Refresh Data
      </button>
      <div className="flex flex-wrap">
        {postQuery.data.map((item: Data) => (
          <DataItem key={item.id} data={item} />
        ))}
      </div>
    </>
  );

  //Using Fetch
  /*
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
    <div className="container flex flex-row flex-wrap dark:bg-slate-800">
      {data &&
        data.map((item: Data, index: number) => (
          <DataItem key={index} data={item} />
        ))}
    </div>
  );
  */
};

export default GetData;
