export const questions = [
  "I enjoy taking long walks outdoors.",
  "I am rarely away from home overnight.",
  "I enjoy companionship.",
  "I enjoy having something to do when I come home.",
  "I have an active lifestyle.",
  "I don't mind the occasional mess.",
];

// Function to create label
function createLabel(labelText, forId) {
  const label = document.createElement("label");
  label.htmlFor = forId;
  label.textContent = labelText;
  return label;
}

// Function to create radio input
const createRadioInput = (id, name, value) => {
  const input = document.createElement("input");
  input.type = "radio";
  input.id = id;
  input.name = name;
  input.value = value;
  input.required = true;
  return input;
};

// function to create question element
const createQuestionElement = (questionText, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.className = "question";
  const questionLabel = createLabel(questionText, `question-${index}`);
  const trueInput = createRadioInput(
    `question-${index}-true`,
    `question-${index}`,
    "true"
  );
  const trueLabel = createLabel("True", `question-${index}-true`);
  const falseInput = createRadioInput(
    `question-${index}-false`,
    `question-${index}`,
    "false"
  );
  const falseLabel = createLabel("False", `question-${index}-false`);

  questionDiv.appendChild(questionLabel);
  questionDiv.appendChild(trueInput);
  questionDiv.appendChild(trueLabel);
  questionDiv.appendChild(falseInput);
  questionDiv.appendChild(falseLabel);
  return questionDiv;
};

// Function to render questions
const renderQuestions = () => {
  questions.forEach((questionText, index) => {
    const questionsContainer = document.getElementById("questions-container");
    const questionEl = createQuestionElement(questionText, index);
    questionsContainer.appendChild(questionEl);
  });
};
export { renderQuestions };
