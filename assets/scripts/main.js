// console.log("Helo hijo de tu puta madre");

// // DOM
// // querySelector -> Nos devuelve el primero
// // querySelectorAll -> Nos devuelve todos lo datos que concuerden.
// let container = document.querySelector("a");
// let queryall = document.querySelectorAll("a");

// queryall.forEach(function(auno){
//     console.log(auno);
// })

// let celdas = document.querySelectorAll("td");

// celdas.forEach(function(td){
//     td.addEventListener('click',function(){
//         console.log(this);
//     })
// });

// Obtener elementos de la clase .close
let links = document.querySelectorAll(".close");
// Recorrerlos

links.forEach(function (link) {
  // Agregar un evento click a cada uno de ellos
  link.addEventListener("click", function(ev){
    // Cancelar evento por defecto return false;  
    ev.preventDefault();

    let content = document.querySelector(".content");

    // Remove animations classes
    content.classList.remove("animate__fadeInDown");
    content.classList.remove("animate__animated");

    // Add animations classes out
    content.classList.add("animate__animated");
    content.classList.add("animate__fadeOutUp");
    
    setTimeout(function(){
        // Redirigir la página al home
        location.href = "/";
    },600);

    


    return false;
  });
});

// Agregar o quitar clases de elementos
