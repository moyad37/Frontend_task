import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";
import clsx from "clsx";
// import Input from "./Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useTranslation } from "react-i18next";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./Input";
const schema = z.object({
  firstName: z.string().min(1, "firstName is Required"),
  lastName: z.string().min(1, "lastName is Required"),
  title: z.string().optional(),
  street: z.string().optional(),
  city: z.string().optional(),
  zip: z.coerce.number().optional(),
  country: z.string().optional(),
  region: z.string().optional(),
  phoneNumber: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const MyForm = () => {
  const { t } = useTranslation();

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { isValid, isDirty, errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <Form
        className="border-2 rounded-lg p-3 flex flex-row flex-wrap gap-px justify-start bg-slate-50"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label={t("firstName")}
          placeholder={t("yourLabel", { label: t("firstName") })}
          error={errors.firstName?.message}
          className="basis-full  w-full"
          {...register("firstName")}
        />

        <Input
          label={t("lastName")}
          placeholder={t("yourLabel", { label: t("lastName") })}
          error={errors.lastName?.message}
          className="basis-full  w-full"
          {...register("lastName")}
        />

        <Input
          label={t("title")}
          placeholder={t("yourLabel", { label: t("title") })}
          error={errors.title?.message}
          {...register("title")}
        />

        <Input
          label={t("street")}
          placeholder={t("yourLabel", { label: t("street") })}
          error={errors.street?.message}
          {...register("street")}
        />

        <Input
          label={t("city")}
          placeholder={t("yourLabel", { label: t("city") })}
          error={errors.city?.message}
          {...register("city")}
        />

        <Input
          label={t("zip")}
          type="number"
          placeholder={t("yourLabel", { label: t("zip") })}
          error={errors.zip?.message}
          {...register("zip")}
        />
        <InputGroup
          size="lg"
          className="my-2 w-full border-2 rounded-lg  min-h-12 "
        >
          <Form.Label
            className="text-md md:text-xl font-bold"
            htmlFor="phoneNumber"
          >
            {t("phoneNumber")}
          </Form.Label>
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field: { value, onChange } }) => (
              <PhoneInput
                className="px-2 w-full border-2 rounded-lg  hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300 focus:border-neutral-300"
                placeholder={t("yourLabel", { label: t("phoneNumber") })}
                value={value}
                onChange={onChange}
              />
            )}
          />
        </InputGroup>

        <InputGroup
          size="lg"
          className="my-2 w-full border-2 rounded-lg  min-h-12 "
        >
          <Form.Label
            className="m-2 text-md md:text-xl font-bold"
            htmlFor="country"
          >
            {t("country")}
          </Form.Label>
          <Controller
            control={control}
            name="country"
            render={({ field: { value, onChange } }) => (
              <CountryDropdown
                classes="px-2 w-full border-2 rounded-lg hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300 focus:border-neutral-300"
                value={value ?? ""}
                onChange={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="region"
            render={({ field: { value, onChange } }) => (
              <RegionDropdown
                classes="px-2 w-full border-2 rounded-lg hover:shadow-lg focus:outline-none focus:ring focus:ring-violet-300 min-h-12 text-violet-300 focus:border-neutral-300"
                country={watch("country") ?? ""}
                value={value ?? ""}
                onChange={onChange}
              />
            )}
          />
        </InputGroup>
        <Container className="flex flex-row justify-end items-center basis-full relative">
          <Button
            className="p-3 text-white font-bold items-end max-h-16 max-w-40 min-w-32 basis-full"
            variant={isValid && isDirty ? "success" : "secondary"}
            type="submit"
            size="lg"
          >
            {t("submit")}
          </Button>
        </Container>
      </Form>
    </>
  );
};

export default MyForm;
