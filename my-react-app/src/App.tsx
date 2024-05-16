import "./App.css";
import Form from "./components/Form/Form";
import GetData from "./components/GetData/GetData";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import ModalForm from "./components/Modal/ModalForm";
// import Buttons from "./components/Buttons/Buttons";
function App() {
  return (
    <div className="container mx-auto w-full relative">
      <LanguageSelector />
      {/* <Buttons layout="grid" /> */}
      {/* <Buttons layout="flex" /> */}
      <GetData />
      <ModalForm />
      {/* <Form /> */}
    </div>
  );
}

export default App;
