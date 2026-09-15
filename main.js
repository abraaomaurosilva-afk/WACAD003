```javascript
// Pegando os elementos HTML

const customName = document.getElementById("customName");
const randomize = document.getElementById("randomize");
const story = document.getElementById("story");


// Função para escolher um elemento aleatório de um array

function randomValueFromArray(array) {

    const random =
        Math.floor(Math.random() * array.length);

    return array[random];
}


// Texto principal da história

const storyText =
    ":name: estava assistindo a uma série quando recebeu " +
    ":insertx:. " +
    "De repente, :inserty: apareceu na tela e " +
    ":name: decidiu continuar assistindo. " +
    "No final do episódio, :insertz: aconteceu " +
    "e deixou todos os espectadores surpresos!";


// Primeiras opções

const insertX = [
    "uma mensagem misteriosa",
    "um convite para participar de uma aventura",
    "uma ligação inesperada",
    "uma notícia sobre seu personagem favorito"
];


// Segundas opções

const insertY = [
    "um personagem desconhecido",
    "o protagonista da série",
    "um detetive misterioso",
    "um grupo de amigos"
];


// Terceiras opções

const insertZ = [
    "o personagem desapareceu misteriosamente",
    "uma grande revelação mudou toda a história",
    "um novo vilão apareceu",
    "todos descobriram um segredo inesperado"
];


// Quando o botão for clicado,
// a função result() será executada

randomize.addEventListener("click", result);


// Função responsável por gerar a história

function result() {

    // Cria uma cópia do texto original

    let newStory = storyText;


    // Escolhe frases aleatórias

    const xItem = randomValueFromArray(insertX);

    const yItem = randomValueFromArray(insertY);

    const zItem = randomValueFromArray(insertZ);


    // Substitui os marcadores

    newStory = newStory.replace(":insertx:", xItem);

    newStory = newStory.replace(":inserty:", yItem);

    newStory = newStory.replace(":insertz:", zItem);


    // Define o nome padrão

    let name = "Alex";


    // Verifica se o usuário digitou um nome

    if (customName.value !== "") {

        name = customName.value;

    }


    // Substitui o nome na história

    newStory = newStory.replace(":name:", name);

    newStory = newStory.replace(":name:", name);


    // Exibe a história na tela

    story.textContent = newStory;
}
```
