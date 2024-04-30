import { Component } from "react";
import PhoneInput from "react-phone-number-input/input";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
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

class CountryList extends Component {
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

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      className="border-2 rounded-lg p-3 flex flex-row flex-wrap bg-slate-50"
      /*onSubmit={(e: FormEvent<className="my-2 text-xl font-bold" htmlFormElement>) => {
          e.preventDefault(); // Verhindert das Standardverhalten des Formulars
          const formData = new FormData(e.target as className="my-2 text-xl font-bold" htmlFormElement); // Extrahiere Formulardaten
          const data: FormData = {
            firstName: formData.get("firstName") as string,
            lastName: formData.get("lastName") as string,
            title: formData.get("title") as string,
            street: formData.get("street") as string,
            city: formData.get("city") as string,
            zip: formData.get("zip") as string,
            country: formData.get("country") as string,
            phoneNumber: formData.get("phoneNumber") as string,
          };
          console.log(data);
        }}*/
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-group m-5 p-3 flex flex-col items-start basis-full">
        <label className="my-2 text-xl font-bold" htmlFor="firstName">
          First Name *
        </label>
        <input
          placeholder="Your first name"
          className="px-2 w-full border-2 rounded-lg  hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && (
          <span className="p-2 text-white bg-red-400 my-1 rounded-md">
            First Name is required
          </span>
        )}
      </div>

      <div className="form-group m-5 p-3 flex flex-col items-start basis-full">
        <label className="my-2 text-xl font-bold" htmlFor="lastName">
          Last Name *{" "}
        </label>
        <input
          placeholder="Your last name"
          className="px-2 w-full border-2 rounded-lg  hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300 focus:border-neutral-300"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <span className="p-2 text-white bg-red-400 my-1 rounded-md">
            Last Name is required
          </span>
        )}
      </div>

      <div className="form-group m-5 p-3 flex flex-col items-start basis-full">
        <label className="my-2 text-xl font-bold" htmlFor="title">
          Title
        </label>
        <input
          placeholder="Your title"
          className="px-2 w-full border-2 rounded-lg  hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300 focus:border-neutral-300"
          {...register("title")}
        />
      </div>

      <div className="form-group m-5 p-3 flex flex-col items-start basis-full md:basis-1/4">
        <label className="my-2 text-xl font-bold" htmlFor="street">
          Street
        </label>
        <input
          className="px-2 w-full border-2 rounded-lg  hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300 focus:border-neutral-300"
          {...register("street")}
        />
      </div>

      <div className="form-group m-5 p-3 flex flex-col items-start basis-full md:basis-1/4">
        <label className="my-2 text-xl font-bold" htmlFor="city">
          City{" "}
        </label>
        <input
          className="px-2 w-full border-2 rounded-lg  hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300 focus:border-neutral-300"
          {...register("city")}
        />
      </div>

      <div className="form-group m-5 p-3 flex flex-col items-start basis-full md:basis-1/4">
        <label className="my-2 text-xl font-bold" htmlFor="zip">
          ZIP{" "}
        </label>
        <input
          type="number"
          placeholder="only numbers"
          className="px-2 w-full border-2 rounded-lg  hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300 focus:border-neutral-300"
          {...register("zip")}
        />
      </div>

      <div className="form-group m-5 p-3 flex flex-col items-start basis-full md:basis-2/4">
        <label className="my-2 text-xl font-bold" htmlFor="country">
          Country
        </label>
        <CountryList {...register("country")} />
      </div>

      <div className="form-group m-5 p-3 flex flex-col items-start basis-full md:basis-2/5">
        <label className="my-2 text-xl font-bold" htmlFor="phoneNumber">
          Phone Number
        </label>

        <PhoneInput
          className="px-2 w-full border-2 rounded-lg  hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300 focus:border-neutral-300"
          placeholder="Enter phone number"
          // Assuming PhoneInput's props include value and onChange
          value={getValues("phoneNumber") || ""}
          onChange={(value: E164Number | undefined) => {
            setValue("phoneNumber", value?.toString() || ""); // Convert E164Number to string
          }}
        />
      </div>

      <div className="form-group m-5 p-3 flex flex-col items-center basis-full">
        <button
          className="p-4 rounded-xl bg-violet-500 text-white hover:bg-violet-400 font-bold items-end max-h-16 max-w-40 min-w-32 basis-full"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
