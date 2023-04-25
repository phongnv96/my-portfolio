type FormItemType = {
  name: string;
  value: string;
  touched: boolean;
  hasError: boolean;
  error: string;
};

interface ContactInfoType {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormItemControlType<T> = Record<keyof T, FormItemType> & {
  isFormValid: boolean;
};

interface ContacInfoFormType extends FormItemControlType<ContactInfoType> {}

type FormItemActionType = {
  type: "UPDATE" | "RESET";
  data: FormItemType & { isFormValid: boolean };
  key: string;
};

export type { ContactInfoType, FormItemActionType, ContacInfoFormType };
