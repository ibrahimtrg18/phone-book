"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Input } from "@/components";
import * as FormStyles from "@/components/Form/Form.styles";
import * as InputStyles from "@/components/Input/Input.styles";
import * as ContactStyles from "@/components/Styles/Contact.styles";
import { useAppContext } from "@/contexts/AppContext";
import {
  Contact_Insert_Input,
  GetContactDetailDocument,
  GetContactDetailQuery,
  useAddContactWithPhonesMutation,
  useEditContactByIdMutation,
  useEditPhoneNumberMutation,
  useGetContactDetailLazyQuery,
} from "@/graphql";
import { getFullName } from "@/utils/common";
import { useApolloClient } from "@apollo/client";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { CgMathPlus, CgTrash } from "react-icons/cg";

type ContactForm = Required<Contact_Insert_Input>;

const ContactForm = () => {
  const { setAppState } = useAppContext();
  const { push, back } = useRouter();
  const search = useSearchParams();
  const id = search.get("id");

  const client = useApolloClient();
  const prevContactData: GetContactDetailQuery | null = client.readQuery({
    query: GetContactDetailDocument, // Replace with your actual query
    variables: { id: Number(id) },
  });

  const [doAddContact] = useAddContactWithPhonesMutation();
  const [doEditContact] = useEditContactByIdMutation();
  const [doEditPhoneNumber] = useEditPhoneNumberMutation();

  const [getContactDetail] = useGetContactDetailLazyQuery({
    variables: { id: Number(id) },
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactForm>({
    defaultValues: {
      first_name: "",
      last_name: "",
      phones: { data: [] },
    },
  });

  const { fields, remove, append } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "phones.data", // unique name for your Field Array
  });

  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    const { first_name, last_name, phones } = data;

    // const _phones = phones?.data.map(({ number }) => ({ number }));
    if (id) {
      doEditContact({
        variables: {
          id: Number(id),
          _set: {
            first_name: first_name,
            last_name: last_name,
          },
        },
      });

      prevContactData?.contact_by_pk?.phones.map(
        ({ contact_id, number }, index) => {
          doEditPhoneNumber({
            variables: {
              pk_columns: {
                contact_id: contact_id!,
                number: number!,
              },
              new_phone_number: String(phones?.data?.[index]?.number),
            },
          });
        }
      );

      back();
      return;
    }

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

  // autopopulate contact detail to form
  useEffect(() => {
    if (id) {
      (async () => {
        const { data } = await getContactDetail();

        if (data?.contact_by_pk) {
          const { first_name, last_name, phones } = data.contact_by_pk;

          reset({
            first_name,
            last_name,
            phones: {
              data: phones,
            },
          });

          setAppState({
            title: `Edit ${getFullName(first_name, last_name)}`,
            showGoBack: true,
            actionButton: {
              show: false,
            },
          });
        }
      })();
    }

    setAppState({
      title: "Add new contact",
      showGoBack: true,
      actionButton: {
        show: false,
      },
    });
  }, [id]);

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
                type="numberic"
                minLength={8}
                maxLength={15}
                errorMessage={errors.phones?.data?.[index]?.number?.message}
              />
              {!id && (
                <Button onClick={() => remove(index)}>
                  <CgTrash />
                </Button>
              )}
              {!id && index === fields.length - 1 && (
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
