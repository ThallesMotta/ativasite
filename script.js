function createCard(produto) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card-produto';

    const blocoDiv = document.createElement('div');
    blocoDiv.className = 'bloco-produto';

    const img = document.createElement('img');
    img.src = produto.srcImage;
    blocoDiv.appendChild(img);

    const h3 = document.createElement('h3');
    h3.textContent = produto.title;
    blocoDiv.appendChild(h3);

    const link = document.createElement('a');
    link.href = produto.link;
    link.innerHTML = 'Ver lista completa';
    blocoDiv.appendChild(link);

    cardDiv.appendChild(blocoDiv);

    return cardDiv;
}

fetch('http://localhost:3000/produtos')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('#produto-container');
        data.forEach(produto => {
            const card = createCard(produto);
            container.appendChild(card);
        });
    })

// Pasta de imagens dentro do seu projeto
const imageFolderPath = '/img/logo-fornecedor/';

// Nomes dos arquivos de imagem na pasta
const imageFiles = [
    'merck.png', 'multilab.png', 'nativita.png', 'natulab.png', 'novafarma.png', 'novaquimica.png', 
    'novartis.png', 'pharlab.png', 'prati.png', 'rava.png', 'rioquimica.png', 'sjetextil.png',
    'sobral.png', 'teuto.png', 'uqf.png', 'vitamedic.png', 'zydus.png', 'medquimica.png',
    'medley.png', 'medlevenson.png', 'markmed.png', 'labGlobo.png', 'jallesMachado.png', 
    'isofarma.png', 'hyporfarma.png', 'hypera.png', 'hipolabor.png', 'halexistar.png', 'geolab.png',
    'fresenius.png', 'fbmFarma.png', 'europharma.png', 'equiplex.png', 'ems.png', 'cristalia.png',
    'chemicaltech.png', 'blowtex.png', 'biotest.png', 'biosintética.png', 'biosani.png', 
    'biolab.png', 'biochimico.png', 'abl.png', 'blau.png'
];

// Referência ao elemento slider
const slider = document.getElementById('parceiro');

// Função para adicionar imagens ao slider dinamicamente
function createSlider() {
    imageFiles.forEach(fileName => {
        const img = document.createElement('img');
        img.src = imageFolderPath + fileName;
        slider.appendChild(img);
    });
}

// Chama a função para criar o slider
createSlider();

let currentParceiro = 0;
const imagesPerSlide = 5; // Número de imagens mostradas por vez

function slideImages(indexChange) {
    const totalImages = imageFiles.length;
    
    // Atualiza o índice atual com base na mudança
    currentParceiro += indexChange;

    // Garante que o índice atual não ultrapasse os limites
    if (currentParceiro < 0) {
        currentParceiro = totalImages - imagesPerSlide; // Vai para as últimas imagens se retroceder antes da primeira
    } else if (currentParceiro >= totalImages - imagesPerSlide + 1) {
        currentParceiro = 0; // Retorna ao início quando ultrapassar as últimas imagens
    }

    // Calcula o deslocamento em porcentagem com base no índice atual e no número de imagens por slide
    const offset = -currentParceiro * (15 / imagesPerSlide);
    slider.style.transform = `translateX(${offset}%)`;
}

// Configura o disparo automático do slider
const autoSlideInterval = setInterval(() => slideImages(1), 3000); // Muda a cada 3 segundos

// Adiciona eventos de clique aos botões
document.getElementById('prev').addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Para o intervalo automático temporariamente
    slideImages(-1); // Retrocede uma imagem
});

document.getElementById('next').addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Para o intervalo automático temporariamente
    slideImages(1); // Avança uma imagem
});

// slider depoimento

document.addEventListener("DOMContentLoaded", function () {
    const depoimentos = document.querySelectorAll(".contentDepoimento");
    const prevButton = document.querySelector(".PrevDepoimento");
    const nextButton = document.querySelector(".NextDepoimento");
    let currentDepoimento = 0;

    function showDepoimento(index) {
        depoimentos.forEach((depoimento, i) => {
            depoimento.classList.toggle("active", i === index);
        });
    }

    prevButton.addEventListener("click", function () {
        currentDepoimento = (currentDepoimento > 0) ? currentDepoimento - 1 : depoimentos.length - 1;
        showDepoimento(currentDepoimento);
    });

    nextButton.addEventListener("click", function () {
        currentDepoimento = (currentDepoimento < depoimentos.length - 1) ? currentDepoimento + 1 : 0;
        showDepoimento(currentDepoimento);
    });

    // Inicializar o primeiro depoimento como visível
    showDepoimento(currentDepoimento);
});

