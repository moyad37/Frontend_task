import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <ul>
      <li>
        <span className="text-cyan-600 font-bold text-xl">
          {`${t("year")} :`}
        </span>
        <span className="text-cyan-700 ">{data.year}</span>
      </li>

      <li>
        <span className="text-cyan-600 font-bold text-xl">
          {`${t("genre")} :`}{" "}
        </span>
        <span className="text-cyan-700">{data.genre}</span>
      </li>

      <li>
        <span className="text-cyan-600 font-bold text-xl">
          {`${t("director")} :`}{" "}
        </span>
        <span className="text-cyan-700">{data.director}</span>
      </li>

      <li>
        <span className="text-cyan-600 font-bold text-xl">
          {`${t("actors")} :`}{" "}
        </span>
        <span className="text-cyan-700">{data.actors}</span>
      </li>

      <li>
        <span className="text-cyan-600 font-bold text-xl">
          {`${t("language")} :`}{" "}
        </span>
        <span className="text-cyan-700">{data.language}</span>
      </li>

      <li>
        <span className="text-cyan-600 font-bold text-xl">{`${t(
          "production"
        )} :`}</span>
        <span className="text-cyan-700">{data.production}</span>
      </li>

      <li>
        <a
          className=" text-blue-600 visited:text-purple-600  text-md"
          href={data.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("linkToWebsite")}
        </a>
      </li>
    </ul>
  );
};

export default ModalItemList;
