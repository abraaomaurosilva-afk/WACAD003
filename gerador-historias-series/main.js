const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

const storyText =
  "Era uma noite estranha em Hawkins. :insertx: encontrou :inserty: perto do laboratório. De repente, :insertz:. O xerife Bob chegou rapidamente para investigar o que estava acontecendo.";

const insertX = ["Eleven", "Mike", "Dustin", "Max", "Will"];
const insertY = [
  "uma bicicleta abandonada",
  "uma porta para o Mundo Invertido",
  "um rádio quebrado",
  "uma criatura misteriosa",
  "uma luz piscando"
];
const insertZ = [
  "as luzes começaram a piscar",
  "um Demogorgon apareceu",
  "o rádio começou a transmitir uma mensagem",
  "todos ouviram um barulho estranho",
  "uma passagem secreta se abriu"
];

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

randomize.addEventListener("click", () => {
  let newStory = storyText
    .replace(":insertx:", randomValueFromArray(insertX))
    .replace(":inserty:", randomValueFromArray(insertY))
    .replace(":insertz:", randomValueFromArray(insertZ));

  if (customName.value.trim()) {
    newStory = newStory.replace("Bob", customName.value.trim());
  }

  if (document.getElementById("uk").checked) {
    newStory += " A história foi adaptada para a versão UK.";
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
});
