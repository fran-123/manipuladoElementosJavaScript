
let body = document.querySelector('body')
let h1 = document.querySelector('h1')

let darkMode = confirm("¿Desea el modo oscuro?")

h1.innerText = "LISTADO DE PELÍCULAS";


h1.style.color = "white";
h1.style.backgroundColor = "teal"
h1.style.padding = "20px"

if(darkMode){
    body.style.backgroundColor = '#7f7f7f​​' /* #7f7f7f​ */
    body.classList.add("fondoMoviesList")
}

