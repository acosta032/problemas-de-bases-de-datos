import { Navbar } from "./components/Navbar.js";
// import { Header } from "./components/Header.js";
// import { Loader } from "./components/Loader.js";
// import { Main } from "./components/Main.js";

// import { Router } from "./components/Router.js";

export function App () {

    const $root = document.getElementById("root");

    $root.innerHTML = null; /*Para que no se duplique la cabecera de la página */
    $root.appendChild(Navbar());
    // $root.appendChild(Main());
    // $root.appendChild(Loader());

    // Router();
    /*
    Generar un error para ver el estilo del texto del error

    ajax({
        url: "algo invalido",
        cbSuccess: () => {}
    })
    */



    
    // document.getElementById("root").innerHTML = `<h1>Bienvenidos a mi primera SPA con Vanila JS</h1>`

    // ajax({
    //     url: api.POSTS,
    //     cbSuccess: (posts) => {
    //         console.log(posts)
    //     }
    // })
    // console.log(api)
}