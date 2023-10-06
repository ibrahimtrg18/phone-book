import { Button, Heading, Input } from "@/components";
import * as FormStyles from "@/components/Form/Form.styles";
import * as InputStyles from "@/components/Input/Input.styles";
import {
  Contact_Insert_Input,
  useAddContactWithPhonesMutation,
} from "@/graphql";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { CgMathPlus, CgTrash } from "react-icons/cg";

import * as ContactStyles from "./Contact.styles";

type ContactForm = Required<Contact_Insert_Input>;

const ContactNew = () => {
  const { register, handleSubmit, control } = useForm<ContactForm>({
    defaultValues: {
      phones: { data: [{ number: "" }] },
    },
  });

  const [mutation] = useAddContactWithPhonesMutation();

  const { fields, remove, append } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "phones.data", // unique name for your Field Array
  });

  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    const { first_name, last_name, phones } = data;

    mutation({
      variables: {
        first_name: first_name!,
        last_name: last_name!,
        phones: phones!.data!,
      },
    });
  };

  return (
    <ContactStyles.Container>
      <Heading>Add new contact</Heading>
      <FormStyles.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("first_name")}
          label="First Name"
          placeholder="First Name"
        />
        <Input
          {...register("last_name")}
          label="Last Name"
          placeholder="Last Name"
        />
        <InputStyles.Wrapper>
          <InputStyles.Label>Phones</InputStyles.Label>
          {fields.map((field, index) => (
            <FormStyles.InputController key={field.id}>
              <InputStyles.Label>{index + 1}</InputStyles.Label>
              <Input
                {...register(`phones.data.${index}.number`)}
                placeholder="Phone"
                type="number"
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

export default ContactNew;
