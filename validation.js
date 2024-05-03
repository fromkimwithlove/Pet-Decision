import { REQUIRED_FIELDS } from "./global.js";

const validateField = (field) => {
  const ERROR = field.nextElementSibling;
  if (field.value === "") {
    ERROR.textContent = "This is a required field";
    field.classList.add("error");
    return false;
  } else {
    ERROR.textContent = "";
    field.classList.remove("error");
    return true;
  }
};

const validateForm = () => {
  let isValid = true;
  REQUIRED_FIELDS.forEach((field) => {
    if (!validateField(field)) {
      isValid = false;
    }
  });
  return isValid;
};
export { validateForm };
