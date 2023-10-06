"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, Input } from "@/components";
import * as FormStyles from "@/components/Form/Form.styles";
import * as InputStyles from "@/components/Input/Input.styles";
import * as ContactStyles from "@/components/Styles/Contact.styles";
import { useAppContext } from "@/contexts/AppContext";
import {
  Contact_Insert_Input,
  useAddContactWithPhonesMutation,
} from "@/graphql";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { CgMathPlus, CgTrash } from "react-icons/cg";

type ContactForm = Required<Contact_Insert_Input>;

const ContactForm = () => {
  const { push } = useRouter();

  const { setAppState } = useAppContext();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactForm>({
    defaultValues: {
      phones: { data: [{ number: "" }] },
    },
  });

  const [doAddContact] = useAddContactWithPhonesMutation();

  const { fields, remove, append } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "phones.data", // unique name for your Field Array
  });

  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    const { first_name, last_name, phones } = data;

    doAddContact({
      variables: {
        first_name: first_name!,
        last_name: last_name!,
        phones: phones!.data!,
      },
    });

    reset();
    push("/");
  };

  useEffect(() => {
    setAppState({
      title: "Add new contact",
      showGoBack: true,
      actionButton: {
        show: false,
      },
    });
  }, []);

  return (
    <ContactStyles.Container>
      <FormStyles.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("first_name", { required: "First name is required" })}
          label="First Name"
          placeholder="First Name"
          errorMessage={errors.first_name?.message}
        />
        <Input
          {...register("last_name", { required: "Last name is required" })}
          label="Last Name"
          placeholder="Last Name"
          errorMessage={errors.last_name?.message}
        />
        <InputStyles.Wrapper>
          <InputStyles.Label>Phones</InputStyles.Label>
          {fields.map((field, index) => (
            <FormStyles.InputController key={field.id}>
              <InputStyles.Label>{index + 1}</InputStyles.Label>
              <Input
                {...register(`phones.data.${index}.number`, {
                  required: "Phone number is required",
                  minLength: {
                    value: 8,
                    message: "Phone number must be at least 8 characters",
                  },
                  maxLength: {
                    value: 15,
                    message: "Phone number cannot exceed 15 characters",
                  },
                })}
                placeholder="Phone"
                type="number"
                minLength={8}
                maxLength={15}
                errorMessage={errors.phones?.data?.[index]?.number?.message}
              />
              <Button onClick={() => remove(index)}>
                <CgTrash />
              </Button>
              {index === fields.length - 1 && (
                <Button onClick={() => append({})}>
                  <CgMathPlus />
                </Button>
              )}
            </FormStyles.InputController>
          ))}
        </InputStyles.Wrapper>
        <Button>Submit</Button>
      </FormStyles.Form>
    </ContactStyles.Container>
  );
};

export default ContactForm;
