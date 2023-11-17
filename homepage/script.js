// transição de cor do nintendo svg
function mouseEncima() {
  const background = document.getElementById("nintendo-container").style;
  const logo = document.getElementById("logo-nintendo").style;
  background.backgroundColor = "#e60012";
  logo.fill = "#fff";
}

function mouseFora() {
  const background = document.getElementById("nintendo-container").style;
  const logo = document.getElementById("logo-nintendo").style;
  background.backgroundColor = "#fff";
  logo.fill = "#000";
}

// responsividade menu
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".categories-container",
  ".categories-container div"
);
mobileNavbar.init();

// produtos

const listaDeOfertas = [
  {
    categoria: "lançamento",
    produtos: [
      {
        imagem:
          "/homepage/img/MarvelsSpider-Man2-EdiçãoStandard-PlayStation5.webp",
        titulo: "Marvel's Spider-Man 2 - Edição Standard - PlayStation 5",
        valorAtual: "301,90",
      },
      {
        imagem:
          "/homepage/img/EldenRingStandardEditionBandaiNamcoXboxOneDigital.webp",
        titulo: "Elden Ring Standard Edition Bandai Namco Xbox One Digital",
        valorAtual: "259,90",
      },
      {
        imagem: "/homepage/img/diabloIV-PS5.webp",
        titulo: "Diablo IV - Playstation 5",
        valorAtual: "305,60",
      },
      {
        imagem: "/homepage/img/mortalkombat-ps5.webp",
        titulo: "Mortal Kombat 1 - Playstation 5",
        valorAtual: "279,30",
      },
      {
        imagem: "/homepage/img/CallofDutyModernWarfare3XboxOneSeriesX.webp",
        titulo: "Call of Duty Modern Warfare 3 - Xbox One/series X",
        valorAtual: "269,90",
      },
    ],
  },
  {
    categoria: "esquentaBlack",
    produtos: [
      {
        imagem: "/homepage/img/Injustice2LegendaryEdition-XboxOne.webp",
        titulo: "Injustice 2 Legendary Edition - Xbox One",
        valorAtual: "139,93",
      },
      {
        imagem: "/homepage/img/TheLastOfUsPart2.webp",
        titulo: "The Last of Us Part II - Playstation 4",
        valorAtual: "126,90",
      },
      {
        imagem: "/homepage/img/SuperMario3DWorldBowsersFuryNintendoSwitch.webp",
        titulo: "Super Mario 3D World + Bowser's Fury - Nintendo Switch",
        valorAtual: "202,90",
      },
      {
        imagem:
          "/homepage/img/PokémonLegendsArceusStandardEditionNintendoSwitchFísico.webp",
        titulo: "Pokémon Legends: Arceus - Nintendo Switch",
        valorAtual: "202,90",
      },
      {
        imagem: "/homepage/img/TheLegendofZelda-TearsofKingdom.webp",
        titulo: "The Legend of Zelda: Tears of the Kingdom - Nintendo Switch",
        valorAtual: "216,93",
      },
    ],
  },
  {
    categoria: "giftCard",
    produtos: [
      {
        imagem: "imagem",
        titulo: "pokemon legends",
        valorAtual: "202,3",
      },
    ],
  },
  {
    categoria: "maisVendidos",
    produtos: [
      {
        imagem: "/homepage/img/GodofWarRagnarökStandardEditionSonyPS5.webp",
        titulo: "God of War Ragnarök Standard Edition - Playstation 5",
        valorAtual: "170,90",
      },
      {
        imagem: "/homepage/img/RedDeadRedemption2-PS5.webp",
        titulo: "Red Dead Redemption 2 - Playstation 5",
        valorAntigo: "129,90",
        valorAtual: "79,90",
      },
      {
        imagem: "/homepage/img/GTAV-XboxSeriesX.webp",
        titulo: "Grand Theft Auto V - Xbox Series X",
        valorAtual: "129,90",
      },
      {
        imagem:
          "/homepage/img/MinecraftMasterCollection-XboxOne-MídiaDigital.webp",
        titulo: "Minecraft Master Collection - Xbox One - Mídia Digital",
        valorAtual: "46,90",
      },
      {
        imagem:
          "/homepage/img/MarioKart8DeluxeMarioKartDeluxeEditionNintendoSwitch.webp",
        titulo: "Mario Kart 8 Deluxe - Nintendo Switch",
        valorAtual: "269,90",
      },
    ],
  },
];
function listarProdutos(listaDeOfertas) {
  for (oferta of listaDeOfertas) {
    let classe;
    if (oferta.categoria === "lançamento") {
      classe = ".lancamentos";
    }
    if (oferta.categoria === "esquentaBlack") {
      classe = ".ofertas-semana";
    }
    if (oferta.categoria === "giftCard") {
      classe = ".gift-cards";
    }
    if (oferta.categoria === "maisVendidos") {
      classe = ".mais-vendidos";
    }
    const divCategoria = document.querySelector(classe);
    for (var i = 0; i < oferta.produtos.length; i++) {
      var produtoCartao = document.createElement("div");
      produtoCartao.classList.add("produto-cartao");

      var favoritarCarrinho = document.createElement("div");
      favoritarCarrinho.classList.add("favoritar-carrinho");
      var iconePlus = document.createElement("i");
      iconePlus.classList.add("fa-solid", "fa-plus");
      favoritarCarrinho.appendChild(iconePlus);

      var productContent = document.createElement("div");
      productContent.classList.add("product-content");
      productContent.style.backgroundImage = `url(${oferta.produtos[i].imagem})`;
      var title = document.createElement("div");
      title.classList.add("title");
      title.innerText = oferta.produtos[i].titulo;
      var currentValue = document.createElement("div");
      currentValue.classList.add("current-value");
      currentValue.innerText = `R$${oferta.produtos[i].valorAtual}`;
      productContent.appendChild(title);
      productContent.appendChild(currentValue);

      var action = document.createElement("div");
      action.classList.add("action");
      var iconeComprar = document.createElement("i");
      iconeComprar.classList.add("fa-solid", "fa-cart-shopping");
      var textbtn = document.createElement("span");
      textbtn.innerText = "COMPRAR";
      action.appendChild(iconeComprar);
      action.appendChild(textbtn);

      produtoCartao.appendChild(favoritarCarrinho);
      produtoCartao.appendChild(productContent);
      produtoCartao.appendChild(action);

      divCategoria.appendChild(produtoCartao);
    }
  }
}

listarProdutos(listaDeOfertas);

// carrossel
var radio = document.querySelector(".manual-btn");
var cont = 1;

document.getElementById("radio1").checked = true;

setInterval(() => {
  proximaImg();
}, 7000);

function proximaImg() {
  cont++;

  if (cont > 3) {
    cont = 1;
  }

  document.getElementById("radio" + cont).checked = true;
}
