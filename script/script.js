// Lista de objetos, cada um com o caminho da imagem e uma descrição única.
const fotos = [
  { src: "images/IMG-20251024-WA0020.jpg", alt: "Cachorrinha da raça Shih-tzu sorrindo com laços rosa" },
  { src: "images/IMG-20251024-WA0021.jpg", alt: "Cachorrinha da raça Shih-tzu com pelo longo e laço rosa" },
  { src: "images/IMG-20251024-WA0022.jpg", alt: "Cachorro marrom e branco com bandana do Stitch" },
  { src: "images/IMG-20251024-WA0023.jpg", alt: "Cachorro da raça Pug com uma bandana verde" },
  { src: "images/IMG-20251024-WA0024.jpg", alt: "Cachorrinha da raça Shih-tzu com um laço vermelho na cabeça" },
  { src: "images/IMG-20251024-WA0025.jpg", alt: "Cachorro da raça Spitz Alemão com uma bandana de festa junina" },
  { src: "images/IMG-20251027-WA0022.jpg", alt: "Cachorrinha preta com gola de renda rosa" },
  { src: "images/IMG-20251027-WA0021.jpg", alt: "Cachorrinha com pelo longo e laços rosa" },
  { src: "images/IMG-20251027-WA0019.jpg", alt: "Cachorrinho caramelo sentado" },
  { src: "images/IMG-20251027-WA0017.jpg", alt: "Cachorrinha sorrindo com laços na cabeça" },
  { src: "images/IMG-20251027-WA0016.jpg", alt: "Três cachorrinhos fantasiados" },
  { src: "images/IMG-20251024-WA0028.jpg", alt: "Cachorro Spitz Alemão com bandana de fogo" },
  { src: "images/claudia1.jpg", alt: "mascote claudia" },  
  { src: "images/princesa0111.jpg", alt: "princesa 01/11/2025" },  
  { src: "images/IMG-20251201-WA0017.jpg", alt: "branquela" },
  { src: "images/IMG-20251201-WA0019.jpg", alt: "boca de foca" },
  { src: "images/IMG-20251201-WA0018.jpg", alt: "livre" },
  { src: "images/1765377120028.jpg", alt: "pandora" },
  { src: "images/IMG-20251201-WA0020.jpg", alt: "mel" },
  { src: "images/IMG-20251201-WA0021.jpg", alt: "neguinha" },
  { src: "images/IMG_20251219_211242_336.jpg", alt: "cao" },
  { src: "images/IMG_20251220_185611_536.jpg", alt: "cao" },
  { src: "images/IMG_20251213_200632_293.jpg", alt: "cao" },
  { src: "images/IMG_20251226_120754.jpg", alt: "1" },
  { src: "images/IMG_20251222_084851.jpg", alt: "2" },
  { src: "images/IMG_20251224_093723.jpg", alt: "3" }
];

const galeria = document.getElementById("galeria-dinamica");

// Descrições de importância do serviço
const serviceImportance = {
  "Banho": "O banho regular é essencial para a higiene, saúde da pele e pelo do seu pet, prevenindo doenças e mantendo-o cheiroso e feliz.",
  "Tosa": "A tosa é importante para manter a pelagem saudável, evitar nós, regular a temperatura corporal e garantir o conforto do seu pet, além de realçar sua beleza.",
  "Estética": "Serviços de estética vão além da beleza, promovendo a saúde da pele e pelo, prevenindo problemas e proporcionando bem-estar e relaxamento ao seu pet.",
  "Corte de Unhas": "O corte regular das unhas evita dores, problemas de postura e lesões nas patinhas do seu pet, garantindo seu conforto ao andar e brincar.",
  "Limpeza de Ouvidos": "A limpeza de ouvidos previne acúmulo de cera, infecções e inflamações, mantendo a saúde auditiva e o conforto do seu pet.",
  "Hidratação de Pelo": "A hidratação profunda nutre e fortalece o pelo, deixando-o macio, brilhante e menos propenso a nós, além de proteger a pele do seu pet."
};

// Elementos do Modal
const imageModal = document.getElementById("image-modal");

// Cria dinamicamente a galeria
if (galeria) {
  fotos.forEach((fotoInfo, index) => {
    const img = document.createElement("img");
    img.src = fotoInfo.src;
    img.alt = fotoInfo.alt;
    img.loading = "lazy";
    img.width = "250";
    img.height = "250";
    galeria.appendChild(img);

    img.addEventListener("click", () => {
      showImageInModal(index);
    });
  });
}

// Lógica do Modal de Imagem
if (imageModal) {
  const modalImage = document.getElementById("modal-image");
  const closeButton = imageModal.querySelector(".close-button");
  const prevImageBtn = imageModal.querySelector(".prev-image-btn");
  const nextImageBtn = imageModal.querySelector(".next-image-btn");
  let currentImageIndex = 0;

  function showImageInModal(index) {
    if (index >= fotos.length) index = 0;
    else if (index < 0) index = fotos.length - 1;
    
    currentImageIndex = index;
    modalImage.src = fotos[currentImageIndex].src;
    modalImage.alt = fotos[currentImageIndex].alt;
    imageModal.style.display = "block";
  }

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      imageModal.style.display = "none";
    });
  }

  imageModal.addEventListener("click", (event) => {
    if (event.target === imageModal) imageModal.style.display = "none";
  });

  if (prevImageBtn) {
    prevImageBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      showImageInModal(currentImageIndex - 1);
    });
  }

  if (nextImageBtn) {
    nextImageBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      showImageInModal(currentImageIndex + 1);
    });
  }
}

// Modal de informações do serviço
const serviceInfoModal = document.getElementById("service-info-modal");
if (serviceInfoModal) {
  const serviceModalTitle = serviceInfoModal.querySelector("#service-modal-title");
  const serviceModalDescription = serviceInfoModal.querySelector("#service-modal-description");
  const serviceCloseButton = serviceInfoModal.querySelector(".service-close-button");

  if (serviceCloseButton) {
    serviceCloseButton.addEventListener("click", () => {
      serviceInfoModal.style.display = "none";
    });
  }

  window.addEventListener("click", (event) => {
    if (event.target == serviceInfoModal) serviceInfoModal.style.display = "none";
  });

  const serviceCards = document.querySelectorAll("#servicos .card");
  serviceCards.forEach(card => {
    card.addEventListener("click", () => {
      const serviceName = card.querySelector("h3").textContent;
      const description = serviceImportance[serviceName] || "Informações detalhadas sobre este serviço estarão disponíveis em breve.";
      
      serviceModalTitle.textContent = serviceName;
      serviceModalDescription.textContent = description;
      serviceInfoModal.style.display = "flex";
    });
  });
}

// Menu hambúrguer
const hamburger = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });
}

// Header transparente ao rolar
const header = document.querySelector("header");
if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) header.classList.add("header-scrolled");
    else header.classList.remove("header-scrolled");
  });
}

// Slideshow Hero
const heroImg = document.getElementById("hero-slideshow-img");
if (heroImg) {
  let fotoAtualIndex = 0;

  function proximaFoto() {
    fotoAtualIndex = (fotoAtualIndex + 1) % fotos.length;
    heroImg.style.opacity = 0;

    setTimeout(() => {
      heroImg.src = fotos[fotoAtualIndex].src;
      heroImg.alt = fotos[fotoAtualIndex].alt;
      heroImg.style.opacity = 1;
    }, 500);
  }
  setInterval(proximaFoto, 4000);
}

// Lógica de Agendamento via WhatsApp
const formAgendamento = document.getElementById("form-agendamento");
if (formAgendamento) {
  formAgendamento.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomeTutor = document.getElementById("nome-tutor").value;
    const telefone = document.getElementById("telefone").value;
    const nomePet = document.getElementById("nome-pet").value;
    const racaPet = document.getElementById("raca-pet").value;
    const pesoPet = document.getElementById("peso-pet").value;
    const servico = document.getElementById("servico").value;

    // NÚMERO ATUALIZADO ABAIXO
    const whatsappNumber = "5518991817474"; 

    let message = `Olá, Sweet Pet! Gostaria de agendar um serviço.\n\n`;
    message += `*Dados do Tutor:*\n`;
    message += `Nome: ${nomeTutor}\n`;
    message += `Telefone: ${telefone}\n\n`;
    message += `*Dados do Pet:*\n`;
    message += `Nome do Pet: ${nomePet}\n`;
    message += `Raça: ${racaPet}\n`;
    message += pesoPet ? `Peso: ${pesoPet} kg\n\n` : `\n`;
    message += `*Serviço Desejado:*\n`;
    message += `${servico}\n\n`;
    message += `Por favor, aguardo a confirmação de data e horário.`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
    formAgendamento.reset();
  });
}

// Destacar item de menu ativo
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('header nav a');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop();
    if ((currentPath === '' && linkPath === 'index.html') || (currentPath === 'index.html' && linkPath === 'index.html')) {
      link.classList.add('nav-link-active');
    } else if (currentPath === linkPath) {
      link.classList.add('nav-link-active');
    }
  });
});
