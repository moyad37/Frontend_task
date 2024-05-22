import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "./components/Form/Form";
// import GetData from "./components/GetData/GetData";
// import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
// import ModalForm from "./components/Modal/ModalForm";
import TodoList from "./components/ToDoList/ToDoList";
// import Buttons from "./components/Buttons/Buttons";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
function App() {
  return (
    <div className="container mx-auto w-full relative">
      {/* <LanguageSelector /> */}
      {/* <Buttons layout="grid" /> */}
      {/* <Buttons layout="flex" /> */}
      {/* <GetData /> */}
      {/* <ModalForm /> */}
      {/* <Form /> */}
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker />
      </LocalizationProvider> */}
      <TodoList />
    </div>
  );
}

export default App;
