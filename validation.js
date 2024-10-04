import { REQUIRED_FIELDS, SUBMIT_ERROR } from "./global.js";

const validateForm = () => {
  let isValid = true;
  REQUIRED_FIELDS.forEach((field) => {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  if (isValid) {
    SUBMIT_ERROR.textContent = "";
  } else {
    SUBMIT_ERROR.textContent =
      "All required fields must be complete before submitting";
  }
  return isValid;
};

const validateField = (field) => {
  const ERROR = field.nextElementSibling;
  if (field.value.trim() === "") {
    ERROR.textContent = "This is a required field";
    field.classList.add("error");
    return false;
  } else {
    ERROR.textContent = "";
    field.classList.remove("error");
    return true;
  }
};

const clearErrors = () => {
  REQUIRED_FIELDS.forEach((field) => {
    const ERROR = field.nextElementSibling;
    ERROR.textContent = "";
    field.classList.remove("error");
  });
  SUBMIT_ERROR.textContent = "";
};

REQUIRED_FIELDS.forEach((field) => {
  field.addEventListener("input", () => {
    if (field.classList.contains("error")) {
      validateField(field);
    }
  });
});

export { validateForm, clearErrors };
