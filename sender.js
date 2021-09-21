//declaro las variables de las entradas del formulario

let nombre = document.getElementById ('nombre');
let telefono = document.getElementById ('telefono');
let email = document.getElementById ('email');
let mensaje = document.getElementById ('mensaje');

//guardar el formulario

const form = document.getElementById ('formulario');

//creamos un evento para escuchar al formulario

form.addEventListener('submit' , (event) => {
 // es para detener la recarga de la pagina del navegador
   event.preventDefault (); 

   sender(nombre.value, telefono.value, email.value, mensaje.value);

   form.reset(); 



}); 

function sender (nombre, telefono, email, mensaje) { 

    Email.send({
        SecureToken: '', // Token de seguridad que sacamos de smtp.js
        To: 'correo de destino', // el mail donde va a llegar la info o el mensaje
        From: 'correo de origen', //el mail de donde se va a enviar el mensaje
        // q tiene que ser el mismo con el generamos el token
        Subject: `${nombre} Te envio un mensaje por la web`,  
        Body: `
        <p>Nombre: ${nombre}</p>
        <p>Telefono: ${telefono}</p>
        <p>Email: ${email}</p>
        <p>Mensaje: ${mensaje} </p>
        `
    }) .then(
        message => swal("Mensaje enviado correctamente!", "En breve nos pondremos en contacto!", "success")
    )
    .catch(
        error => swal("Error al enviar!", "Volve a probar mas tarde!", "error"))


}