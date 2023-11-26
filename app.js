if('serviceWorker' in navigator){
    navigator.serviceWorker.register("./serviceWorker.js")
    .then(registrado => console.log("El serviceWorker se registro", registrado))
    .catch(error=> console.log("El service worker no se registro", error))
}else{
    alert('el service worker no es compatible');
}