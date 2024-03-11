function contraseñaValida(contra) {
    if (contra == "eoZiugBf&g9" || contra == "2Fj(jjbFsuj")
      console.log(true);
    else console.log(false);
  }
  console.log("Hola");
  contraseñaValida("2Fj(jjbFsuj");
  contraseñaValida("jhdj");

  function calcularImpuestos(edad, ingresos){
    if (edad>=18 && ingresos>=1000)
    return(ingresos*40/100)
else return (0)

  }
  console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500))


function bmi(peso, altura){
    if(peso / altura**2 < 18.5)
    return"Bajo peso";
else if(peso/altura**2 >= 18.5 && peso/altura**2 <= 24.9)
return"Normal";
else if(peso/altura**2 >= 25 && peso/altura**2 <= 29.9)
return"Sobrepeso";
else if(peso/altura**2 >= 30)
return"Obeso";
}
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"
console.log(bmi(86,1.7))


function likes(numero){
    if(numero < 1000)
    return numero
else if (numero < 1000000)
return Math.trunc(numero/1000) +"K"
else return Math.trunc(numero/1000000) +"M"
}

console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"

function fizzBuzz(num){
    if ((num%3 == 0) && (num%5 == 0))
   return "fizzbuzz"
   else if(num%3 == 0)
    return "fizz"
else if(num%5 == 0)
return "buzz"
else return num;
}
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8

function contarRango(a, b){
    let van =[];
    for(var i = a; i<b; i++){
        van.push(i)   
    }
    return van.length-1;
}
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0

function sumarRango(a,b){
    let sum=[];
    let suma=0;
    for(var i=a;i<=b;i++){
        sum.push(i);
    }
    for(var index = 0; index < sum.length; index++){
        suma+=sum[index];
    }
    return suma;
}
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0

function numeroDeAes(pal){
let total=0;
for(var i=0; i<=pal.length; i++){
    if(pal[i]==="a")total++;
}
return total
}
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0
console.log("******************************")

function numeroDeCaracteres(string, caracter){
    let tota=0;
    for(var i=0; i<string.length; i++){
        if(string[i]==caracter)tota++;
        
    }
    return tota;
    
    
}
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4

function sumarArreglo(arr){
    let suma=0;
    for(var i=0; i<arr.length; i++){
        suma+=arr[i]
    }
    return suma;
}
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0

function multiplicarArreglo(ar){
    let mul=1;
    for(var i=0; i<ar.length; i++){
        mul= mul *ar[i]
    }
    return mul;
}
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1

function removerCeros(array){
    let remove=[];
    for(var i=0; i<array.length; i++){
        if(array[i] != 0)remove.push(array[i]);
        
    }
    return remove;
}
console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []
console.log("******************************")


function sumarArreglo(array, inicial, final){
    let suma=0;
    let ar=[];
    for(var i=inicial; i<= final; i++){
        ar.push(array[i])
    }
    for(var i=0; i<ar.length; i++){
        suma+=ar[i];
    }
    return suma
}
console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0

function transcribir(adn){
    let nuevo=adn
    .replaceAll("A","U")
    .replaceAll("G", "P")
    .replaceAll("T","A")
    .replaceAll("C","G")
    .replaceAll("P", "C")
    
    return nuevo;
}
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

function capitalizar(str){
    let firs=str.charAt();
    let rest=str.slice(1);
    return firs.toUpperCase()+rest;
}
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""

function capitalizarr(nombre){
    let nom=nombre.split(' ');
    for(var i=0; i<nom.length; i++){
        nom[i]= nom[i].charAt(0).toUpperCase(1)+nom[i].slice(1)
    }
    return nom.join(" ")
}
console.log(capitalizarr("hola mundo")) // "Hola Mundo"
console.log(capitalizarr("make it real")) // "Make It Real"
console.log(capitalizarr("")) // "

function max(num){
    let res=1;
    for(var i=0; i<num.length; i++){
        if(num[i]>res)res=num[i]
    }
    return res;
}
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9
console.log("**************")


function min(num){
    let men=10000000000000;
    for(var i=0; i<num.length; i++){
        if(num[i]<men)men=num[i]
    }
    return men;
}
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2

function password(pass){
    let nee= pass.toLowerCase().replace(/ /g, "").replaceAll("a","4").replaceAll("e","3").replaceAll("i","1").replaceAll("o","0");
    return nee;
}
console.log(password("Hola")) // "h0l4"
console.log(password("esta Es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""

function pares(valor){
    let respuesta=[];
    for(var i=0; i<valor.length; i++){
        if(valor[i]%2 == 0){
            respuesta.push(valor[i])
        }
    }
return respuesta;
}
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []

function posiciones(val){
    let respuesta=[];
    for(var i=0; i<val.length; i++){
        if(val[i]%2==0){
            respuesta.push(i)
        }
    }
    return respuesta;
}
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []

function duplicar(val){
    let respuesta=[];
    for(var i=0; i<val.length; i++){
        respuesta.push(val[i]*2)
    }
    return respuesta;
}
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []

function empiezanConA(str){
    let respuesta=[];
    for(var i=0; i<str.length; i++){
        if(str[i].charAt()== "a"|| str[i].charAt()=="A"){
            respuesta.push(str[i])
        }
    }
    return respuesta;
}
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []

function terminanConS(str){
    let respuesta=[];
    for(var i=0; i<str.length; i++){
        if(str[i].charAt(str[i].length-1)=="s"){
            respuesta.push(str[i])
        }
    }
    return respuesta;
}
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []