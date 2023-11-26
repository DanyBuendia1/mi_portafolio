const modoObscuro = ()=>{
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    /*const animacion = document.querySelector(".animacion");
    animacion.style.background="rgb(244, 117, 244)"*/
    let CV = document.querySelector(".CV");
    CV.style.color="white";
}

const modoClaro = ()=>{

    const body = document.querySelector("body").setAttribute("data-bs-theme", "light");
    const footer = document.querySelector(".footer");
    footer.style.color="white"

    let CV = document.querySelector(".CV");
    CV.style.color="black"
    /*
    const div = document.querySelector(".animacion")
    div.style.backgroundColor="black";
    const educacion = document.querySelector(".educacion");
    educacion.style.color="black";
    */
}

const cambiarTema= ()=>{
    document.querySelector("body").getAttribute("data-bs-theme")=== "light"? modoObscuro(): modoClaro();
}

var ventana = window.innerWidth;

if(ventana <= 720){
    const correo = document.querySelector("#correo");
    correo.innerHTML=`<marquee behavior="" direction="">danybuendia98@gmail.com</marquee>`
}