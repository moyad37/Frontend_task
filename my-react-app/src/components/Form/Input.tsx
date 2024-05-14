import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";
interface Props extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  placeholder?: string;
  error?: string | boolean;
  required?: boolean;
}
const Input = forwardRef<HTMLInputElement, Props>(
  ({ name, className, error, required, label, placeholder, ...rest }, ref) => {
    return (
      <div
        className={clsx(
          "form-group m-5 p-3 flex flex-col items-start basis-full",
          className
        )}
      >
        <label className="my-2 text-xl font-bold" htmlFor={name}>
          {label}
        </label>
        <input
          {...rest}
          placeholder={placeholder}
          name={name}
          required={required}
          ref={ref}
          className="px-2 w-full border-2 rounded-lg  hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300"
        />
        {error && (
          <span className="p-2 text-white bg-red-400 my-1 rounded-md">
            {error}
          </span>
        )}
      </div>
    );
  }
);

export default Input;
