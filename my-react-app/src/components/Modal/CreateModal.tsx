// import Modal from "react-modal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ModalItemList from "./ModalItemList";
import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
// Modal.setAppElement("#root");

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
    <Modal show={isopen} onHide={setState}>
      <Modal.Header closeButton>
        <Modal.Title>{data.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalItemList data={data} />
      </Modal.Body>
    </Modal>
  );
};

export default CreateModal;
