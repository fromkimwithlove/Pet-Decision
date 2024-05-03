export const FORM = document.getElementById("form");
export const OUTPUT = document.querySelector("[data-output]");
export const ERROR = document.getElementsByClassName("errorMessage");
export const SUBMIT_ERROR = document.getElementById("submitError");
export const REQUIRED_FIELDS = [
  document.getElementById("fname"),
  document.getElementById("livingSpace"),
  document.getElementById("timeCommitment"),
  document.getElementById("budget"),
];

const formElements = {
  firstName: document.getElementById("fname"),
  livingSpace: document.getElementById("livingSpace"),
  timeCommitment: document.getElementById("timeCommitment"),
  budget: document.getElementById("budget"),
};

export const EL = formElements;
