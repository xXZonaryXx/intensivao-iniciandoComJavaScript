//1- Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert("Hello World!")

//2- Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let X = 10;
let Y = 3;
let sum = X + Y;
alert(`A soma das variáveis eh igual a ${sum}`)

//3- Crie um script que declare uma variável e verifique se o seu valor é um número. 
//   Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

const valor = 12;
if (typeof valor === 'number') {
    alert(`É um número`)
}
else {
    alert(`Não é um número`)
}

//4- Crie um script que declare uma variável e verifique se o seu valor é uma string. 
//   Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

const variável = "12";
if (typeof variável === 'string') {
    alert(`É uma string`)
}
else {
    alert(`Não é uma string`)
}

//5- Crie um script que declare uma variável e verifique se o seu valor é um booleano.
//   Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

const booleanoOuNao = true
if (typeof booleanoOuNao === 'boolean') {
    alert(`É um boolean`)
}
else {
    alert(`Não é um boolean`)
}

//6- Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
//7- Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
//8- Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

var number1 = 10
var number2 = 20

var soma = number1 + number2;
var multiplicacao = number1 * number2;
var divisao = number1 / number2;

alert(`A soma dos numeros eh ${soma}`)
alert(`A multiplicacao dos numeros eh ${multiplicacao}`)
alert(`A soma dos numeros eh ${divisao}`)

//9- Crie um script que declare uma variável e verifique se o seu valor é um número par. 
//   Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

var numero1 = 6;

if (numero1 % 2 === 0){
    alert(`é um número par`)
} else {
    alert(`não é um número par`)
}

//10- Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. 
//    Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

var numero1 = 7;

if (numero1 % 2 !== 0){
    alert(`é um número impar`)
} else {
    alert(`não é um número impar`)
}