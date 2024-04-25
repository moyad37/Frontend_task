import { useState } from "react";
import CreateModal from "../Modal/CreateModal";

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
      <CreateModal
        data={data}
        isopen={modalIsOpen}
        setState={(arg: boolean) => setIsOpen(arg)}
      />
    </>
  );
};

export default DataItem;
