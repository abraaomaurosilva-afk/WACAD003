const displayedImg = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// 1. Array com os nomes dos arquivos das 5 imagens de Stranger Things
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const altTexts = {
  'pic1.jpg': 'Eleven em Hawkins',
  'pic2.jpg': 'Dustin no laboratório',
  'pic3.jpg': 'Steve Harrington',
  'pic4.jpg': 'Mundo Invertido',
  'pic5.jpg': 'Portal de Hawkins'
};

/* Looping através das imagens */
for (let i = 0; i < images.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + images[i]);
  newImage.setAttribute('alt', altTexts[images[i]]);
  thumbBar.appendChild(newImage);

  /* Adicionando um manipulador onclick a cada imagem em miniatura */
  newImage.onclick = function(e) {
    let imgSrc = e.target.getAttribute('src');
    displayImage(imgSrc);
  };
}

// Função nomeada para atualizar a imagem exibida
function displayImage(value) {
  displayedImg.setAttribute('src', value);
}

/* Escrevendo um manipulador que executa o botão escurecer / clarear */
btn.onclick = function() {
  const btnClass = btn.getAttribute('class');

  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Clarear';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Escurecer';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
};