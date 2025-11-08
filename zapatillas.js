const foto = "Fotos/Pegasus41PRM.PNG";
const paginaProducto = "producto.html";
const cantidadZapatillas = 6;

function crearZapatilla(){
    const section = document.createElement("section");
    section.classList.add("productos");

    const link = document.createElement("a");
    const imagen = document.createElement("img");
    const nombre = document.createElement("p");
    const precio = document.createElement("p");

    const main = document.getElementById("contenedorProductos");

    link.href = paginaProducto;
    link.target = "_blank";
    imagen.src = foto;
    nombre.innerText = "Pegasus 41";
    precio.innerText = "250000";

    main.appendChild(section);
    section.appendChild(link);
    link.appendChild(imagen);
    section.appendChild(nombre);
    section.appendChild(precio);
}

for(let i = 0; i < cantidadZapatillas; i++){
    crearZapatilla();
}