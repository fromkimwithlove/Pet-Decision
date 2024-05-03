const saveData = (petData) => {
  const petDataString = JSON.stringify(petData);
  localStorage.setItem("petDataKey", petDataString);
  const links = petData.map((pet) => ({
    id: pet.id,
    name: `${pet.firstName}'s Pet Suggestion`,
  }));
  localStorage.setItem("petLinksKey", JSON.stringify(links));
};

const getData = () => {
  const petDataString = localStorage.getItem("petDataKey");
  return petDataString ? JSON.parse(petDataString) : [];
};

const getLinks = () => {
  const linksString = localStorage.getItem("petLinksKey");
  return linksString ? JSON.parse(linksString) : [];
};

const petData = getData();
const links = getLinks();

export { petData, saveData, getData, getLinks, links };
