//con esta funcion comprobamos si estaq desde celular
function isMobile() {

    //comprobamos si estamos desde pc
  if (sessionStorage.desktop)

      return false;

      //caso contrario desde celular
  else if (localStorage.mobile)

      return true;

  var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
  for (var i in mobile)

      if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;

  return false;
}



//CREAMOS LA DIRECCION DE WHATSAPP
const urlDesktop = 'https://web.whatsapp.com/';

const urlMobile = 'whatsapp://';

const telefono = '+54 9 2614179615';


//CHEQUEAMOS EL CLICK DEL BOTON DE ENVIAR WHATSAPP
$("#enviarMensaje").click(function (e) { 

  //EVITAMOS QUE RECARGE LA PAGINA
  e.preventDefault() 

    setTimeout(() => {
  
  //CREAMOS VARIABLES CON LOS DATOS INGRESADOS
  let nombre = $('#nombrews').val();

  let email = $('#emailws').val();

  //recuperamos el carrito con el texto del pedido y lo agregamos al chatt pregenerado de whatsapp
  let pedido = localStorage.getItem('texto');

  //HACEMOS EL MENSAJE DE WHATSAPP
  let mensaje = 'send?phone='+telefono+'&text=Hola soy '+ nombre + ' mi correo es '+email+' les escribo porque ' + pedido
  
  //SI ES UN CELULAR LO ENVIAMOS A LA APP
  if(isMobile()) {

    window.open(urlMobile + mensaje, '_blank')

  }else{
    
    //EN CASO DE QUE NO SEA CELULAR LO ENVIA A WHATSAPP WEB
    window.open(urlDesktop + mensaje, '_blank')

  } 

    }, 1000);
});


