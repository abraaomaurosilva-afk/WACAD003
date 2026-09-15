const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Texto bruto com placeholders e arrays adaptados para o tema de Stranger Things
let storyText = 'Faziam 90 graus fahrenheit lá fora no laboratório de Hawkins, então :insertx: resolveu dar uma volta de bicicleta até :inserty:. De repente, a luz começou a piscar freneticamente, e então :insertz:. O xerife Hopper viu tudo, mas não se assustou — :insertx: pesa 180 libras e estava com muita fome de waffles.';

let insertX = ['a Eleven', 'o Dustin', 'o Steve Harrington'];
let insertY = ['do Mundo Invertido', 'do Shopping Starcourt', 'da Caverna do Vecna'];
let insertZ = ['abriu um portal imenso com o poder da mente', 'lançou um urro que mandou o Demogorgon pelos ares', 'invocou um bando de morcegos do mal e saiu correndo'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if (customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('xerife Hopper', name);
  }

  if (document.getElementById('uk').checked) {
    // Conversão de 180 libras para stones (aprox 12.8)
    let weight = Math.round(180 * 0.0714285714) + ' stone';
    // Conversão de 90 Fahrenheit para Celsius (aprox 32.2)
    let temperature = Math.round((90 - 32) * 5 / 9) + ' centígrados';
    
    newStory = newStory.replace('180 libras', weight);
    newStory = newStory.replace('90 graus fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
