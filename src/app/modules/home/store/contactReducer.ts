import {
  ContactInfoFormType,
  FormItemActionType,
} from '../types/ContactFormType';

function contactFormReducer(
  state: ContactInfoFormType,
  action: FormItemActionType
) {
  switch (action.type) {
    case "UPDATE":
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      const currentFiled: any = state;
      return {
        ...state,
        // update the state of the particular field,
        // by retaining the state of other fields
        [name]: { ...currentFiled[name], value, hasError, error, touched },
        isFormValid,
      };
    case "CHECK_VALIDATION": 
      return {
        ...action.data,
      }
    default:
      return state;
  }
}

export { contactFormReducer };
