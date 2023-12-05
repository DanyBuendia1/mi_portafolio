const nombreCache ="Mi_portafolio"
const archivosCache =
[
   "./",
   "./iconos/logosinfondo.png",
   "./bootstrap/css/bootstrap.min.css",
   "./bootstrap/js/bootstrap.min.js",   
   "./index.html",
   "./perfil.css",
   "./perfil.js",
   "./app.js",
   // ### IMGAGENES Y PDF ###
   "./img/CV.pdf",
   "./img/css.png",
   "./img/github.png",
   "./img/js.png",
   "./img/sql.png",
   "./img/nosql.png",
   "./img/bootstrap.png",
   "./img/cordova.png",
   "./img/figma.png",
   "./img/Nodejs.png",
   "./img/PWA.png",
   "./img/unity.png",

   "./img/bandaguerra.jpg",
   "./img/claro.png",
   "./img/esli.jpg",
   "./img/marching.jpeg",
   "./img/obscuro.png",
   "./img/tickets.jpg",
   "./img/ticoy.jpg",
   "./img/utna.jpg",
   // ### Libreria AOS ###
   "./aos-master/dist/aos.css",
   "./aos-master/dist/aos.js",
   // ### Iconos ###
    "./iconos/logo72.png",
    "./iconos/logo512.png"
]
self.addEventListener("install", e =>{
    // Pre-cache our key assets
    console.log("El service Worker se instalo", e)
    e.waitUntil(
        caches.open(nombreCache).then((cache)=>{
            console.log("cache guardada correctamente")
            cache.addAll(archivosCache)
        })
    )
})

self.addEventListener('activate', e =>{
    console.log('el service worker esta activo');
})


self.addEventListener('fetch', e=>{
    console.log('fetch...', e)
    e.respondWith(
        caches.match(e.request)
        .then(respuestaCache =>{
            return respuestaCache
        })
    )
})