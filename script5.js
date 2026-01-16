let usuario="juanma";
let contrasenia="1234";
let captchacorrecto="true";
let login="Error al iniciar sesión";


let user=prompt("Usuario");
let password=prompt("contraseña");
let captcha=prompt("Escribe true para completar el captcha");

if (user===usuario && password===contrasenia && captcha===captchacorrecto ){

        login='sesión iniciada';
}

alert(login);