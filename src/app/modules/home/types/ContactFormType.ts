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
  createdAt?: string;
}

type FormItemControlType<T> = Record<keyof T, FormItemType> & {
  isFormValid: boolean;
};

interface ContactInfoFormType extends FormItemControlType<Omit<ContactInfoType, "createdAt">> {}

type FormItemActionType = {
  type: "UPDATE" | "RESET" | "CHECK_VALIDATION";
  data: any;
  key?: string;
};

export type { ContactInfoFormType, ContactInfoType, FormItemActionType };
