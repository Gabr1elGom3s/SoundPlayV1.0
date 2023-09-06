const head = document.getElementById('head');
const body = document.getElementById('body');

const styleHeader = "<link rel='stylesheet' href='./header.css'>";
head.innerHTML += styleHeader;

const header = document.createElement('header');
header.setAttribute('id', 'header');
header.setAttribute('class', 'header');
body.prepend(header);

const headerContent = 

    "<nav class='navBar'>" + 
        "<a href='./index.html'><img class='logo' src='./img/iconrock-red.svg' alt=''></a>" +
        "<ul class='navMenu'>" +
            "<li class='navItem'><a href='./page1.html' class='navLink'>SOBRE</a></li>" +
            "<li class='navItem'><a href='./page2.html' class='navLink'>CONTATO</a></li>" +
        "</ul>" +
        "<div class='hamburguer'>" +
            "<span class='bar'></span>" +
            "<span class='bar'></span>" +
            "<span class='bar'></span>" +
         "</div>" +
    "</nav>";

header.innerHTML += headerContent;

const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.navMenu');

hamburguer.addEventListener('click', (evt) => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

const footer = document.createElement('footer');
footer.setAttribute('id', 'footer');
footer.setAttribute('class', 'footer');
body.appendChild(footer);

const footerContent = 

    "<footer class='footer'>" +
        "<div class='logoAddressContainer'>" +
            "<a href='./index.html'><img src='./img/logo-onebitcode.svg' alt='logo-onebitcode' class='footerLogoOne'></a>" +
            "<div class='verticalBar'></div>" +
            "<div class='AddressContainer'>" +
                "<p>123456789</p>" +
                "<p>123456789</p>" +
                "<p>123456789</p>" +
            "</div>" +
        "</div>" +

        "© [ONEBITCODE] [2023]. Todos os direitos reservados." +

        "<nav class='navFooter'>" +
            "<a class='navFooterButton' href='./page1.html'>SOBRE</a>" +
            "<a class='navFooterButton' href='./page2.html'>CONTATO</a>" +
        "</nav>" +
    "</footer>";

footer.innerHTML += footerContent;
