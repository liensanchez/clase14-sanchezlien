
//registramos el clik
$("#buttonImpresionFotografia").click(function (e) { 

  //evitamos q recargue la web
  e.preventDefault();

  //editamos la visibilidad de los objetos
  $("#impresionFotografia").show();

  //aplicamos css para mostrar las promociones
  $("#impresionFotografia").css({
    "display":"flex",
    "flex-direction":"row",
    "justify-content":"space-around",
    "flex-wrap":"wrap"
  })
});


//usar el JSON de mercaderia
const URLproductos="./datos/productos.json"

//registramos click del boton
$("#quieroPromo10x15").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //conseguimos el precio del archivo JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable para que pueda ser mostrado
    let valor=JSON.stringify(response['productos'][0]['precio'])
    

    //agregamos los precios a un carrito y lo parseamos porque esta como string
    carrito.push(parseInt(valor));
    
    //agregamos el producto al modal con el precio
    $("#modalProductos").append(
      
      `
      <h2>Una promo 10x15$${valor}</h2>
      `
    );
  })

  
  
});

//registramos un solo click para que nos agregue una sola vez el texto deseado
$( "#quieroPromo10x15" ).one( "click", function( event ) {

  //obtenemos el JSON
  $.get(URLproductos,function (response) {

    //lo hacemos variable
    let mensaje=JSON.stringify(response['productos'][0]['texto'])
    
    //ponemos el texto en el array
    texto.push(mensaje);
  })

});



