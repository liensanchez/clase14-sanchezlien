
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


//hacemos un array de los productos
const productos =  [{id:1, producto:"foto10x15", precio:150, texto: "Quiero una promo 10x15"},

                    {id:2, producto:"foto13x18", precio:180, texto: "que onda loquita"},

                    {id:3, producto:"foto15x20", precio:200},

                    {id:4, producto:"fotoCarnet", precio:150},

                    {id:5, producto:"fotoPolaroid", precio:150}];


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