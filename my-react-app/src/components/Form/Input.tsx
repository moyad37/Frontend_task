import clsx from "clsx";
import { forwardRef, LegacyRef } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import CountryList from "./CountryList";

interface Props {
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  className?: string;
  CountryListBool?: boolean;
  errors?: FieldErrors<FormData>;
}
const Input = forwardRef<HTMLInputElement, Props>(
  (
    { type, placeholder, name, register, className, CountryListBool, errors },
    ref
  ) => {
    return (
      <div
        className={clsx(
          "form-group m-5 p-3 flex flex-col items-start basis-full",
          className
        )}
      >
        <label className="my-2 text-xl font-bold" htmlFor={name}>
          {name}
        </label>
        {CountryListBool && <CountryList {...register(name)} />}
        {!CountryListBool && (
          <input
            type={type}
            placeholder={placeholder}
            className="px-2 w-full border-2 rounded-lg  hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300"
            ref={ref as LegacyRef<HTMLInputElement>}
            {...register(name)}
          />
        )}
        {errors && errors[name as keyof FormData] && (
          <span className="p-2 text-white bg-red-400 my-1 rounded-md">
            {name} is required
          </span>
        )}
      </div>
    );
  }
);

export default Input;

/* 
import clsx from "clsx";
import { forwardRef, LegacyRef } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormReturn,
} from "react-hook-form";
import CountryList from "./CountryList";

interface Props {
  type: string;
  placeholder: string;
  name: string;
  errors?: FieldErrors<FormData>;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  className?: string;
  CountryListBool?: boolean;
  formMethods: UseFormReturn<FieldValues>;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      type,
      placeholder,
      name,
      errors,
      register,
      required,
      className,
      CountryListBool,
      formMethods,
    },
    ref
  ) => {
    const { getInputProps } = formMethods;

    return (
      <div
        className={clsx(
          "form-group m-5 p-3 flex flex-col items-start basis-full",
          className
        )}
      >
        <label className="my-2 text-xl font-bold" htmlFor={name}>
          {name}
        </label>
        {CountryListBool && <CountryList {...getInputProps(name)} />}
        {!CountryListBool && (
          <input
            type={type}
            placeholder={placeholder}
            className="px-2 w-full border-2 rounded-lg  hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300"
            ref={ref as LegacyRef<HTMLInputElement>}
            {...getInputProps(name, { required: required })}
          />
        )}
        {errors && errors[name as keyof FormData] && (
          <span className="p-2 text-white bg-red-400 my-1 rounded-md">
            {name} is required
          </span>
        )}
      </div>
    );
  }
);

export default Input;
 */
