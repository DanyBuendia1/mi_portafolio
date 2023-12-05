if("serviceWorker" in navigator){
    navigator.serviceWorker.register('./serviceWorker.js')
    .then(registrado=> console.log("el service Worker se registro", registrado))
    
    .catch((error =>console.log("El service Worker no se registro", error)))
    }else{
     alert("El service Woker no es compatible");
    }