export const validateInput = (name: string, value: any) => {
  let hasError = false,
    error = "";
  switch (name) {
    case "name":
    case "message":
      if (value.trim() === "") {
        hasError = true;
        error = "Field cannot be empty";
      } else {
        hasError = false;
        error = "";
      }
      break;
    default:
      break;
  }
  return { hasError, error };
};
