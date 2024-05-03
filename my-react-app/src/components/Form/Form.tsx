import PhoneInput from "react-phone-number-input/input";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
/* import CountryList from "./CountryList"; */
import { useState } from "react";
import clsx from "clsx";
import Input from "./Input";

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

const Form = () => {
  const [check, setCheck] = useState(false);
  const [scale, setScale] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    getValues,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    if (isValid) {
      setCheck(true);
      setScale(true);
      setTimeout(() => {
        setScale(false);
      }, 100);
      setTimeout(() => {
        setCheck(false);
      }, 4500);
    }
  };
  const scaleVisibility = scale ? "scale-0" : "";
  return (
    <form
      className="border-2 rounded-lg p-3 flex flex-row flex-wrap bg-slate-50"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        register={register}
        type={"text"}
        placeholder={"Your first name"}
        name={"firstName"}
        errors={errors}
        required={true}
      />

      <Input
        register={register}
        type={"text"}
        placeholder={"Your last name"}
        name={"lastName"}
        errors={errors}
        required={true}
      />

      <Input
        register={register}
        type={"text"}
        name={"Title"}
        errors={errors}
        required={false}
      />

      <Input
        register={register}
        type={"text"}
        name={"Street"}
        errors={errors}
        required={false}
        addClass="md:basis-1/4"
      />

      <Input
        register={register}
        type={"text"}
        name={"City"}
        errors={errors}
        required={false}
        addClass="md:basis-1/4"
      />

      <Input
        register={register}
        type={"number"}
        name={"ZIP"}
        errors={errors}
        required={false}
        addClass="md:basis-1/4"
      />

      <Input
        register={register}
        name={"Country"}
        errors={errors}
        required={false}
        CountryListBool={true}
      />

      <div className="form-group m-5 p-3 flex flex-col items-start basis-full md:basis-2/5">
        <label className="my-2 text-xl font-bold" htmlFor="phoneNumber">
          Phone Number
        </label>
        <PhoneInput
          className="px-2 w-full border-2 rounded-lg  hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300 focus:border-neutral-300"
          placeholder="Enter phone number"
          value={getValues("phoneNumber") || ""}
          onChange={(value: E164Number | undefined) => {
            setValue("phoneNumber", value?.toString() || "");
          }}
        />
      </div>

      <div className="form-group m-5 p-3 flex flex-row justify-end items-center basis-full relative">
        <button
          className={clsx(
            "p-4 rounded-xl text-white font-bold items-end max-h-16 max-w-40 min-w-32 basis-full",
            isValid ? "bg-violet-500 hover:bg-violet-400" : "bg-gray-200"
          )}
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
        {isValid && check && (
          <p
            className={clsx(
              "bg-green-300 p-3 absolute -top-10 text-white rounded-lg my-auto duration-500",
              scaleVisibility
            )}
          >
            Submit successful
          </p>
        )}
      </div>
    </form>
  );
};

export default Form;
