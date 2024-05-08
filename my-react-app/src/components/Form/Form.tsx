import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";
import clsx from "clsx";
import Input from "./Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CountryList from "./CountryList";

const schema = z.object({
  firstName: z.string().min(1, "firstName is Required"),
  lastName: z.string().min(1, "lastName is Required"),
  title: z.string().optional(),
  street: z.string().optional(),
  city: z.string().optional(),
  zip: z
    .preprocess((a) => parseInt(z.string().parse(a), 10), z.number())
    .optional(),
  country: z.string().optional(),
  phoneNumber: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  //console.log(isDirty, isValid, errors);

  return (
    <form
      className="border-2 rounded-lg p-3 flex flex-row flex-wrap bg-slate-50"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        placeholder="Your first name"
        error={errors.firstName?.message}
        {...register("firstName")}
        required
      />

      <Input
        placeholder="Your last name"
        error={errors.lastName?.message}
        {...register("lastName")}
        required
      />
      <Input
        placeholder="Your title"
        error={errors.title?.message}
        {...register("title")}
      />

      <Input error={errors.street?.message} {...register("street")} />

      <Input error={errors.city?.message} {...register("city")} />

      <Input type="number" error={errors.zip?.message} {...register("zip")} />

      <div className="form-group m-5 p-3 flex flex-col items-start basis-full md:basis-2/5">
        <label className="my-2 text-xl font-bold" htmlFor="phoneNumber">
          Phone Number
        </label>
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field: { value, onChange } }) => (
            <PhoneInput
              className="px-2 w-full border-2 rounded-lg  hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300 focus:border-neutral-300"
              placeholder="Enter phone number"
              value={value}
              onChange={onChange}
            />
          )}
        />
      </div>

      <div className="form-group m-5 p-3 flex flex-col items-start basis-full md:basis-2/5">
        <label className="my-2 text-xl font-bold" htmlFor="country">
          Country
        </label>
        <Controller
          control={control}
          name="country"
          render={({ field: { onChange } }) => (
            <CountryList onChange={onChange} />
          )}
        />
      </div>

      <div className="form-group m-5 p-3 flex flex-row justify-end items-center basis-full relative">
        <button
          className={clsx(
            "p-4 rounded-xl text-white font-bold items-end max-h-16 max-w-40 min-w-32 basis-full",
            isValid && isDirty
              ? "bg-violet-500 hover:bg-violet-400"
              : "bg-gray-200"
          )}
          type="submit"
          disabled={!isValid || !isDirty}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
