const modoObscuro = ()=>{
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    /*const animacion = document.querySelector(".animacion");
    animacion.style.background="rgb(244, 117, 244)"*/
    let CV = document.querySelector(".CV");
    CV.style.color="white";

    let modo = document.getElementById("modo");
    modo.innerHTML="Modo Obscuro"+"<br><img src='./img/obscuro.png' class='obscuro'>";

    let habilidades = document.getElementById("habilidades");
    habilidades.style.color="white"

    let texto = document.querySelector(".texto");
    texto.style.color="white"
}

const modoClaro = ()=>{

    const body = document.querySelector("body").setAttribute("data-bs-theme", "light");
    const footer = document.querySelector(".footer");
    footer.style.color="white"

    let CV = document.querySelector(".CV");
    CV.style.color="black"

    let modo = document.getElementById("modo");
    modo.innerHTML="Modo Claro"+"<br><img src='./img/claro.png' class='obscuro'>"

    let habilidades = document.getElementById("habilidades");
    habilidades.style.color="white"

    let texto = document.querySelector(".texto");
    texto.style.color="white"
}

const cambiarTema= ()=>{
    document.querySelector("body").getAttribute("data-bs-theme")=== "light"? modoObscuro(): modoClaro();
}

var ventana = window.innerWidth;

if(ventana <= 720){
    const correo = document.querySelector("#correo");
    correo.innerHTML=`<marquee behavior="" direction="">danybuendia98@gmail.com</marquee>`

    const js = document.querySelector(".js")
    js.style.marginLeft = "50px"

    const nosql = document.querySelector(".nosql")
    nosql.style.marginLeft = "50px"

    const figma = document.querySelector(".figma")
    figma.style.marginLeft = "50px"

    const PWA = document.querySelector(".PWA")
    PWA.style.marginLeft = "50px"

    const unity = document.querySelector(".unity")
    unity.style.marginLeft = "40px"
    
    const lenguaje = document.querySelector(".lenguaje");
    lenguaje.style.marginLeft="50px"

    const mongo = document.querySelector(".mongo");
    mongo.style.marginLeft="50px"

    const figma1 = document.querySelector(".figma1");
    figma1.style.marginLeft="30px"

    const PWA1 = document.querySelector(".PWA1");
    PWA1.style.marginLeft="30px"

    const unity1 = document.querySelector(".unity1");
    unity1.style.marginLeft="50px"
}