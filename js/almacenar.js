let array = [];

function mostrar(){
    let contenido = ``
    if(localStorage.getItem('lista')){
        array = JSON.parse(localStorage.getItem('lista'))

        array.forEach(element => {
            contenido += `<li>${element}</li>`
        });
    } else {
        localStorage.setItem('lista', '')
    }
    document.getElementById('contenedor').innerHTML = contenido;
}

document.addEventListener("DOMContentLoaded", ()=>{
    mostrar();
    //función para agregar el texto del input
    document.getElementById('agregar').addEventListener("click", (e)=>{
        e.preventDefault();
        let item = document.getElementById('item')
        if(item.value){
            array.push(item.value)
            localStorage.setItem('lista',JSON.stringify(array));
            mostrar();
            item.value = '';
        }
    })
    
    //función para limpiar el localstorage y el contenedor
    document.getElementById('limpiar').addEventListener('click', (e)=>{
        e.preventDefault();
        localStorage.setItem('lista','')
        array = [];
        mostrar();
    })
})