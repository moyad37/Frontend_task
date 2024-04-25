import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ModalItemList from "./ModalItemList";

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
  isopen: boolean;
  setState: (arg: boolean) => void;
};

const CreateModal = ({ data, isopen, setState }: Props) => {
  return (
    <Modal
      isOpen={isopen}
      onRequestClose={() => setState(false)}
      className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 w-fit border-2 rounded-lg bg-slate-300 p-10"
    >
      <ModalItemList data={data} />
      <button
        onClick={() => setState(false)}
        className=" absolute top-4 right-6"
      >
        <FontAwesomeIcon
          className="hover:text-red-600 hover:text-xl border-2 p-2 rounded-lg"
          icon={faTimes}
        />
      </button>
    </Modal>
  );
};

export default CreateModal;
