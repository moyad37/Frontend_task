import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { SetStateAction, useState } from "react";
import { forwardRef, useRef, useImperativeHandle } from "react";

/* type CountryType = {
  country?: string;
  region?: string;
}; */

const CountryList = forwardRef(({ onChange, error, ...rest }) => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const selectCountry = (val: SetStateAction<string>) => {
    setCountry(val);
    //setRegion("");
    onChange({ country: val, region });
  };

  const selectRegion = (val: SetStateAction<string>) => {
    setRegion(val);

    onChange({ country, region: val });
  };

  return (
    <>
      <CountryDropdown
        {...rest}
        //name="county"
        classes="px-2 w-full border-2 rounded-lg hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300 focus:border-neutral-300"
        value={country}
        onChange={(val) => selectCountry(val)}
      />
      <RegionDropdown
        {...rest}
        //name="region"
        classes="px-2 w-full border-2 rounded-lg hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300 focus:border-neutral-300"
        country={country}
        value={region}
        onChange={(val) => selectRegion(val)}
      />
    </>
  );
});

export default CountryList;
