
//mostramos con el click el modal
$("#botonModal").click(function () { 

  //modificamos el css
  $("#modalCarrito").css({
    "display":"block"
  })
  

});

//lo ocultamos con el click en la x
$(".cerrar").click(function () { 

  $("#modalCarrito").css({
    "display":"none"
  })
  
});


//carrito array para sumar los productos
const carrito=[];


//array para guardar el pedido
const texto=[];


//boton sumar 
$("#sumarProductos").click(function (e) { 

  e.preventDefault();
  
  //funcion para sumar los productos del array carrito
  let total = carrito.reduce((a, b) => a + b, 0);

  //mostramos el total
  $("#modalContenido").append(
    
    `
    <h2>Total:$${total}</h2>
    `
  );
 
  //lo guardamos en el local storge para poder insertarlo en wpp
  localStorage.setItem('suma', total);

  //lo guardamos en el local storge para poder insertarlo en wpp
  localStorage.setItem('texto', texto);
});

$("#enviarPedido").click(function (e) { 
  e.preventDefault();
  $("#formulario").css({
    "display" : "block"
  })
  
});