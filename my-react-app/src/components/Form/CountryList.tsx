import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { Component } from "react";

type CountryType = {
  country?: string;
  region?: string;
};

class CountryList extends Component {
  static this: CountryType;
  constructor(props: CountryType) {
    super(props);
    this.state = { country: "", region: "" };
  }
  giveCountry() {
    return this.state;
  }
  selectCountry(val: string) {
    this.setState({ country: val });
  }

  selectRegion(val: string) {
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

export default CountryList;
