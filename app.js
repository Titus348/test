var nombreDelUsuario = "jhon";
let apellido = "Guala";
let numero1 = 1;
let numero2= 2;
let password  = "1234"
let input = "1234"
nombreDelUsuario= "lourdes";
let resultado = password ==input;
const PI =  3.1415; 
let tipoTarjeta = "debitso"
let cuenta = 50;
let nombres = ["marcos", "lourdes"];



if (resultado == true){
console.log("Loguin correcto bienvenido")
} else{
    console.log("contraseña incorrecta")
}

switch(tipoTarjeta){
case "debito":
    console.log("Tarjeta de debito");
    break;
    case "credito":
        console.log("tarjeta de credito");
        break;
        default:
            console.log("efectivo");
}

console.log(nombreDelUsuario,apellido,PI,resultado, "Hola mundo!")

while(cuenta >= 0){
console.log("ingresando en " + cuenta + " " + nombres[cuenta]);
cuenta--;
}


for(let i = nombres.length -1 ; i >= 0 ; i--){
console.log(nombres[i]);
}

//FUNCIONES

function saludos(){
    console.log("hola hola pianola");
}

saludos();

//parametros
function saludos2(nombre){
    console.log("hola hola pianola " + nombre );
}
nombre  = "marcos"; 

saludos2(nombres[1]);

document.write("Holis");

