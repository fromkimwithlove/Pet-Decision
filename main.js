import { FORM, SUBMIT_ERROR } from "./global.js";
import { PET } from "./pet.js";
import { questions, renderQuestions } from "./renderQuestions.js";
import { validateForm } from "./validation.js";
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
  FORM.reset();
}

// event listener for submit button
FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateForm()) {
    renderPetData();
  } else {
    SUBMIT_ERROR.textContent =
      "All required fields must be complete before submitting";
  }
});
