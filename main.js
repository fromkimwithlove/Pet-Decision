import { FORM, SUBMIT_ERROR } from "./global.js";
import { PET } from "./pet.js";
import { questions, renderQuestions } from "./renderQuestions.js";
import { validateForm, clearErrors } from "./validation.js";
import { displayMessage, renderLinks } from "./ui.js";
import { saveData, petData } from "./storage.js";

// Load page with focus on first name field
document.addEventListener("DOMContentLoaded", () => {
  renderQuestions();
  renderLinks();
  document.getElementById("fname").focus();
});

// Function to get responses
function getResponses() {
  const responses = [];
  questions.forEach((_, index) => {
    const radio = document.querySelector(
      `input[name="question-${index}"]:checked`
    );
    if (radio) {
      responses.push(radio.value);
    }
  });
  return responses;
}

// Function to render pet data
function renderPetData() {
  const responses = getResponses();
  const petObj = new PET(
    FORM.fname.value,
    FORM.livingSpace.value,
    parseInt(FORM.timeCommitment.value),
    parseInt(FORM.budget.value),
    responses
  );
  petObj.suggestPet();
  petData.push(petObj);
  saveData(petData);
  renderLinks();
  displayMessage(petObj.id);
}

// Event listener for submit button
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors(); // Clear any existing errors

  if (validateForm()) {
    renderPetData();
    FORM.reset();
    clearErrors(); // Clear errors after successful submission
  }
});

// Optional: Add event listener for form reset
FORM.addEventListener("reset", () => {
  clearErrors();
});
