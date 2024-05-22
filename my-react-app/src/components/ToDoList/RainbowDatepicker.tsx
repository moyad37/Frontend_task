import { DatePicker } from "react-rainbow-components";

interface RainbowDatepickerProps {
  date: Date | null | string;
  onChange: (date: Date) => void;
}

const RainbowDatepicker: React.FC<RainbowDatepickerProps> = ({
  date,
  onChange,
}) => {
  return (
    <div>
      <DatePicker
        id="datePicker-1"
        value={date}
        onChange={(value: Date) => onChange(value)}
        formatStyle="large"
      />
    </div>
  );
};

export default RainbowDatepicker;
