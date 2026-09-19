const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector(".dark");
const overlay = document.querySelector(".overlay");
const caption = document.querySelector(".caption");

const personagens = [
  { imagem: "pic1.jpeg", nome: "Eleven, personagem de Stranger Things" },
  { imagem: "pic2.jpeg", nome: "Mike, personagem de Stranger Things" },
  { imagem: "pic3.jpeg", nome: "Dustin, personagem de Stranger Things" },
  { imagem: "pic4.jpeg", nome: "Max, personagem de Stranger Things" },
  { imagem: "pic5.jpeg", nome: "Will, personagem de Stranger Things" }
];

personagens.forEach((personagem) => {
  const newImage = document.createElement("img");
  newImage.src = `images/${personagem.imagem}`;
  newImage.alt = personagem.nome;
  newImage.tabIndex = 0;
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", () => selecionarImagem(newImage, personagem));
  newImage.addEventListener("keydown", (event) => {
    if (event.key === "Enter") selecionarImagem(newImage, personagem);
  });
});

function selecionarImagem(imagem, personagem) {
  displayedImage.src = imagem.src;
  displayedImage.alt = personagem.nome;
  caption.textContent = personagem.nome;

  thumbBar.querySelectorAll("img").forEach((miniatura) => {
    miniatura.classList.remove("selected");
  });

  imagem.classList.add("selected");
}

const primeiraImagem = thumbBar.querySelector("img");
if (primeiraImagem) primeiraImagem.classList.add("selected");

btn.addEventListener("click", () => {
  const btnClass = btn.getAttribute("class");

  if (btnClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Clarear";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Escurecer";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
});
