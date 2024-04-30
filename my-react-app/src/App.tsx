import { Component } from "react";
import "./App.css";
import PhoneInput from "react-phone-number-input/input";
//import Buttons from "./components/Buttons/Buttons";
//import GetData from "./components/GetData/GetData";
import { useForm } from "react-hook-form";
//import { ChangeHandler, E164Number } from "your-phone-input-library"; // Stelle sicher, dass du die richtigen Typen importierst
import "react-phone-number-input/style.css";
import Form from "./components/Form/Form";

import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
interface FormData {
  firstName: string;
  lastName: string;
  title?: string;
  street?: string;
  city?: string;
  zip: string;
  country: string;
  phoneNumber?: string;
}

class Example extends Component {
  static this: any;
  constructor(props) {
    super(props);
    this.state = { country: "", region: "" };
  }
  giveCountry() {
    return this.state;
  }
  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  render() {
    const { country, region } = this.state;
    return (
      <div>
        <CountryDropdown
          classes="px-2 w-full border-2 rounded-lg  hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300 focus:border-neutral-300"
          value={country}
          onChange={(val) => this.selectCountry(val)}
        />
        <RegionDropdown
          classes="px-2 w-full border-2 rounded-lg  hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300 focus:border-neutral-300"
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)}
        />
      </div>
    );
  }
}

/* setOptions({
  locale: localeDe,
  theme: "ios",
  themeVariant: "light",
});
 */
function App() {
  return (
    <div className="container mx-auto w-full">
      {/*<Buttons layout="grid" />*/}
      {/*<Buttons layout="flex" />*/}
      {/* <GetData /> */}
      <Form />
    </div>
  );
}

export default App;
