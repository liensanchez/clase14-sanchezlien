
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


//registramos click del boton
$("#quieroPromo10x15").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();

  //agregamos los precios a un carrito
  carrito.push(productos[0].precio);
    
  //agregamos el producto al modal con el precio
  $("#modalProductos").append(
    
    `
    <h2>${productos[0].precio}</h2>
    `
  );
  
});

//registramos un solo click para que nos agregue una sola vez el texto deseado
$( "#quieroPromo10x15" ).one( "click", function( event ) {

  //pusheamos el texto a un array que luego sera utilizado en whatsapp
  texto.push(productos[0].texto);

});

//registramos click del boton 
$("#quieroPromo13x18").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();
  
  //agregamos los precios a un carrito
  carrito.push(productos[1].precio);
    
  //agregamos el producto al modal con el precio
  $("#modalProductos").append(
    
    `
    <h2>${productos[1].precio}</h2>
    `
  );

});

//registramos un solo click para que nos agregue una sola vez el texto deseado
$( "#quieroPromo13x18" ).one( "click", function( event ) {

  //pusheamos el texto a un array que luego sera utilizado en whatsapp
  texto.push(productos[1].texto);

});


//registramos click del boton 
$("#quieroPromo15x20").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();
  
  //agregamos los precios a un carrito
  carrito.push(productos[2].precio);
    
  //agregamos el producto al modal con el precio
  $("#modalProductos").append(
    
    `
    <h2>${productos[2].precio}</h2>
    `
  );
});

//registramos un solo click para que nos agregue una sola vez el texto deseado
$( "#quieroPromo15x20" ).one( "click", function( event ) {

  //pusheamos el texto a un array que luego sera utilizado en whatsapp
  texto.push(productos[2].texto);

});


//registramos click del boton 
$("#quieroPromoCarnet").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();
  
  //agregamos los precios a un carrito
  carrito.push(productos[3].precio);
    
  //agregamos el producto al modal con el precio
  $("#modalProductos").append(
    
    `
    <h2>${productos[3].precio}</h2>
    `
  );
});

//registramos un solo click para que nos agregue una sola vez el texto deseado
$( "#quieroPromoCarnet" ).one( "click", function( event ) {

  //pusheamos el texto a un array que luego sera utilizado en whatsapp
  texto.push(productos[3].texto);

});


//registramos click del boton 
$("#quieroPromoPolaroid").click(function (e) { 

  //evitamos que recargue
  e.preventDefault();
  
  //agregamos los precios a un carrito
  carrito.push(productos[4].precio);
    
  //agregamos el producto al modal con el precio
  $("#modalProductos").append(
      
    `
    <h2>${productos[4].precio}</h2>
    `
  );
});

//registramos un solo click para que nos agregue una sola vez el texto deseado
$( "#quieroPromoPolaroid" ).one( "click", function( event ) {

  //pusheamos el texto a un array que luego sera utilizado en whatsapp
  texto.push(productos[4].texto);

});



