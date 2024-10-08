import { OUTPUT, EL } from "./global.js";
import { petData, saveData, links, getLinks } from "./storage.js";

const linksContainer = document.querySelector(".results-links");

const renderLinks = () => {
  if (!linksContainer) {
    console.error("No links container found.");
    return;
  }

  linksContainer.innerHTML = "<h3>Your Pet Suggestions</h3>";
  const linkList = document.createElement("ul");
  linkList.className = "link-list";

  const allLinks = getLinks();
  allLinks.forEach((link) => {
    const linkElement = document.createElement("li");
    const anchorElement = document.createElement("a");
    anchorElement.href = "#";
    anchorElement.textContent = link.name;
    anchorElement.addEventListener("click", (e) => {
      e.preventDefault();
      displayMessage(link.id);
    });
    linkElement.appendChild(anchorElement);
    linkList.appendChild(linkElement);
  });

  linksContainer.appendChild(linkList);
};

const displayMessage = (linkId) => {
  const pet = petData.find((p) => p.id === linkId);
  OUTPUT.innerHTML = "";
  if (!pet) {
    OUTPUT.innerHTML = "Pet not found.";
    return;
  }

  const newP = document.createElement("p");
  newP.textContent = `${pet.firstName}, because you live in a(n) ${pet.livingSpace}, can commit ${pet.timeCommitment} hours a day, and $${pet.budget} a month on a new pet...`;
  OUTPUT.appendChild(newP);

  const suggestionEl = document.createElement("h3");
  suggestionEl.textContent = `We suggest getting a ${pet.suggestedPet}`;
  OUTPUT.appendChild(suggestionEl);

  const psa = document.createElement("p");
  psa.textContent =
    "Remember, adopt, don't shop! Shelters have amazing pets for their forever home. Except pet rocks. You can find those in your backyard.";
  OUTPUT.appendChild(psa);

  displayButtons(pet, petData.indexOf(pet));
};

const displayButtons = (pet, index) => {
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  OUTPUT.appendChild(editButton);
  OUTPUT.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    petData.splice(index, 1);
    links.splice(index, 1);
    saveData(petData);
    renderLinks();
    OUTPUT.innerHTML = "";
  });

  editButton.addEventListener("click", () => {
    EL.firstName.value = pet.firstName;
    EL.livingSpace.value = pet.livingSpace;
    EL.timeCommitment.value = pet.timeCommitment;
    EL.budget.value = pet.budget;
    for (let i = 0; i < pet.responses.length; i++) {
      const radio = document.querySelectorAll(
        `input[name="question-${i}"][value="${pet.responses[i]}"]`
      );
      if (radio[0]) {
        radio[0].checked = true;
      }
    }
    petData.splice(index, 1);
    links.splice(index, 1);
    saveData(petData);
    renderLinks();
    OUTPUT.innerHTML = "";
  });
  return OUTPUT;
};

export { displayMessage, displayButtons, renderLinks };
