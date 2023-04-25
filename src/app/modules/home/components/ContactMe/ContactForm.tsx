import React, { useReducer } from 'react';

import { toast } from 'react-hot-toast';

import Button from '@/app/common/components/Button';
import { validateInput } from '@/app/common/utils/formUtils';

import { contactInfoCreateMessage } from '../../services';
import { contactFormReducer } from '../../store/contactReducer';
import {
  ContactInfoFormType,
  ContactInfoType,
} from '../../types/ContactFormType';

const initialState: ContactInfoFormType = {
  name: { name: "name", value: "", touched: false, hasError: false, error: "" },
  email: {
    name: "email",
    value: "",
    touched: false,
    hasError: false,
    error: "",
  },
  phone: {
    name: "phone",
    value: "",
    touched: false,
    hasError: false,
    error: "",
  },
  message: {
    name: "message",
    value: "",
    touched: false,
    hasError: false,
    error: "",
  },
  isFormValid: false,
};

export const ContactForm = () => {
  const [formState, dispatch] = useReducer(contactFormReducer, initialState);

  const onItemChange = (
    name: string,
    value: any,
    dispatch: any,
    formState: any
  ) => {
    const { hasError, error } = validateInput(name, value);
    let isFormValid = true;

    for (const key in formState) {
      const item = formState[key];
      // Check if the current field has error
      if (key === name && hasError) {
        isFormValid = false;
        break;
      } else if (key !== name && item.hasError) {
        // Check if any other field has error
        isFormValid = false;
        break;
      }
    }

    dispatch({
      type: "UPDATE",
      data: { name, value, hasError, error, touched: true, isFormValid },
    });
  };

  const formCheckValidate = (formValue: any) => {
    let isFormValid = true;
    const newState: any = { ...formValue };
    for (const key in formValue) {
      const item = formValue[key];
      const { hasError, error } = validateInput(key, item.value);
      // Check if the current field has error
      if (hasError) {
        isFormValid = false;
      }
      newState[key] = { ...newState[key], hasError, error };
    }
    newState.isFormValid = isFormValid;
    dispatch({
      type: "CHECK_VALIDATION",
      data: newState,
    });
    return isFormValid;
  };

  const onInputChange = (key: string, event: any) => {
    onItemChange(key, event.target.value, dispatch, formState);
  };

  const createMessage = async () => {
    const isFormValidate = formCheckValidate(formState);
    if (!isFormValidate) {
      toast.error("Please fill in all required filed!");
      return;
    }
    const dataValue: ContactInfoType = {
      name: formState.name.value,
      email: formState.email.value,
      phone: formState.phone.value,
      message: formState.message.value,
    };
    await contactInfoCreateMessage(dataValue);
  };

  return (
    <div className="right wow fadeInRight">
      <div className="rounded-lg lg:col-span-3">
        <div className="space-y-4">
          <div>
            <label
              className={`sr-only ${
                formState.name.hasError ? "text-red-500" : ""
              }`}
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={`w-full rounded-lg dark:bg-transparent  border border-solid p-4 text-sm ${
                formState.name.hasError ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="Name*"
              type="text"
              id="name"
              onChange={(event) => {
                onInputChange("name", event);
              }}
            />
            {formState.name.hasError && (
              <span className="mt-2 text-red-500 text-sm">
                {formState.name.error}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="w-full rounded-lg dark:bg-transparent border-gray-200 border border-solid p-4 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
                onChange={(event) => {
                  onInputChange("email", event);
                }}
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">
                Phone
              </label>
              <input
                className="w-full rounded-lg dark:bg-transparent border-gray-200 border border-solid p-4 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
                onChange={(event) => {
                  onInputChange("phone", event);
                }}
              />
            </div>
          </div>

          <div>
            <label
              className={`sr-only ${
                formState.message.hasError ?? "text-red-500"
              }`}
              htmlFor="message"
            >
              Message
            </label>

            <textarea
              className={`w-full rounded-lg dark:bg-transparent  border border-solid p-4 text-sm  ${
                formState.message.hasError
                  ? "border-red-500"
                  : "border-gray-200"
              }`}
              placeholder="Message*"
              rows={8}
              id="message"
              onChange={(event) => {
                onInputChange("message", event);
              }}
            ></textarea>
            {formState.message.hasError && (
              <span className="text-red-500 text-sm mt-2">
                {formState.message.error}
              </span>
            )}
          </div>

          <div className="mt-4">
            <Button
              className="inline-block w-full sm:w-auto"
              onClick={createMessage}
            >
              Send Enquiry
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
