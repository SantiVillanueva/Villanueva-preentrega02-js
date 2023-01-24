/*Soy Santiago Villanueva y esta es mi 2da pre entrega, en este caso arme un modelo de un local de ropa relacionada con la selección Argentina y el mundial,
dando la posibilidad de obtener un descuento dependiendo si el vendendor lo desea o no.*/

let prodcutosEnStock = [
    {id: 1, nombre: "Buzo Messi", tipo: "buzo", precio: 3500},
    {id: 2, nombre: "Buzo Copa", tipo: "buzo", precio: 3700},
    {id: 3, nombre: "Buzo Dibu", tipo: "buzo", precio: 3200},
    {id: 4, nombre: "remera Messi", tipo: "remera", precio: 2500},
    {id: 5, nombre: "Remera Mundial", tipo: "remera", precio: 2200},
    {id: 6, nombre: "Remera Dibu", tipo: "remera", precio: 2300},
    {id: 7, nombre: "Remera Maradona", tipo: "remera", precio: 2000},

]
let carrito = []


 let option = prompt("Bienvenido/a  \n1 - Ver productos \n2 - Comprar por ID. \n3 - Intentar conseguir descuento \n0 - para finalizar.");
 while (option != "0") {
     switch (option) {
        case "1":
        let productos = prodcutosEnStock.map (producto => producto.id +"- " + producto.nombre + " $" + producto.precio)
        alert ("¿Que quiere comprar? " + productos.join(", "))
        break;
         case "2":
        
        agregarAlCarrito()
        function agregarAlCarrito() {
            let elijoProducto = parseInt(prompt("Agrega a tu compra de acuerdo al ID de tu producto")) 
            let productoAgregar = prodcutosEnStock.find((el) => el.id == elijoProducto)
            carrito.push(productoAgregar)
            console.log(carrito)
         actualizarCarrito()
}
    function actualizarCarrito() {
        let total = carrito.reduce((acc, el) => acc + el.precio, 0)
        console.log("el valor de tu compra actualmente es $" + total)
    }
    break;
    case "3":
        let descuento = Math.random()
        let total = parseInt(carrito.reduce((acc, el) => acc + el.precio, 0))
        if (descuento < 0.5){
        let generarDescuento = () => {
            return  (Math.random() * (0.9 - 0.7) + 0.7)
        }
        let totalConDescuento = Math.round(total * generarDescuento())
       
        alert("Le caíste bien a nuestro vendedor por lo que obtuviste un descuento y deberás pagar: " + totalConDescuento )
        console.log("el valor de tu compra actualmente es $" + totalConDescuento)
    }
        else{
            alert("Esto es un negocio serio y los precios son los pactados, deberás pagar: " + total)
        }
        break;
    default:
        alert ("Gracias por pasar por nuestro local");
        break;
    
}
option = prompt("Elegí una opción: \n1 - Ver productos \n2 - Comprar por ID. \n3 - Intentar conseguir descuento \n0 - para finalizar.");
}
