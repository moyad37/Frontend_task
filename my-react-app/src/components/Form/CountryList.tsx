import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { SetStateAction, useState } from "react";
import { forwardRef, useRef, useImperativeHandle } from "react";

/* type CountryType = {
  country?: string;
  region?: string;
}; */

const CountryList = forwardRef(({ onChange }, ref) => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const selectCountry = (val: SetStateAction<string>) => {
    setCountry(val);
    setRegion(""); // Reset region when country changes
    onChange(val);
  };

  const selectRegion = (val: SetStateAction<string>) => {
    setRegion(val);
  };

  return (
    <div ref={ref}>
      <CountryDropdown
        classes="px-2 w-full border-2 rounded-lg hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300 focus:border-neutral-300"
        value={country}
        onChange={(val) => selectCountry(val)}
      />
      <RegionDropdown
        classes="px-2 w-full border-2 rounded-lg hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300 focus:border-neutral-300"
        country={country}
        value={region}
        onChange={(val) => selectRegion(val)}
      />
    </div>
  );
});

export default CountryList;
