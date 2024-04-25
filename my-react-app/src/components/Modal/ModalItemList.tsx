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

const ModalItemList = ({ data }: { data: Data }) => {
  return (
    <ul>
      <li>
        <span className="text-cyan-600 font-bold text-xl">Year : </span>
        <span className="text-cyan-700 ">{data.year}</span>
      </li>

      <li>
        <span className="text-cyan-600 font-bold text-xl">Genre : </span>
        <span className="text-cyan-700">{data.genre}</span>
      </li>

      <li>
        <span className="text-cyan-600 font-bold text-xl">Director : </span>
        <span className="text-cyan-700">{data.director}</span>
      </li>

      <li>
        <span className="text-cyan-600 font-bold text-xl">Actors : </span>
        <span className="text-cyan-700">{data.actors}</span>
      </li>

      <li>
        <span className="text-cyan-600 font-bold text-xl">Language : </span>
        <span className="text-cyan-700">{data.language}</span>
      </li>

      <li>
        <span className="text-cyan-600 font-bold text-xl">Production :</span>
        <span className="text-cyan-700">{data.production}</span>
      </li>

      <li>
        <a
          className=" text-blue-600 visited:text-purple-600  text-md"
          href={data.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to Website
        </a>
      </li>
    </ul>
  );
};

export default ModalItemList;
