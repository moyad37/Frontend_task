import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/Checkbox.css";
const Checkbox = ({ checked, onChange }) => {
  return (
    <label className="custom-checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkmark">
        {checked && <FontAwesomeIcon icon={faCheck} />}
      </span>
    </label>
  );
};

export default Checkbox;
