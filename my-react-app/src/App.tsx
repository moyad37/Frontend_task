import "./App.css";

import Form from "./components/Form/Form";
//import GetData from "./components/GetData/GetData";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";

//import { useTranslation } from "react-i18next";
/* setOptions({
  locale: localeDe,
  theme: "ios",
  themeVariant: "light",
});
 */

function App() {
  // const { t } = useTranslation();

  return (
    <div className="container mx-auto w-full relative">
      <LanguageSelector />
      {/*<Buttons layout="grid" />*/}
      {/*<Buttons layout="flex" />*/}
      {/* <GetData /> */}
      <Form />
    </div>
  );
}

export default App;
