// 1. Par ou Ímpar
// Crie uma função chamada `parOuImpar` que recebe um número (tipo: Number).
// Utilize o operador de mod (%) e uma estrutura condicional `if` para retornar "Par" ou "Ímpar".


function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par"
    } else {
        return "Ímpar"
    }
}
console.log(parOuImpar(4))
console.log(parOuImpar(7))
    

// 2. Maior de Três
// Crie uma função chamada `maiorDeTres` que recebe três números (tipo: Number).
// Crie uma lógica de programação para retornar o maior número.

function maiorDeTres(num1, num2, num3) {
    let maior = num1 // Começamos assumindo que o primeiro número é o maior

    if (num2 > maior) {
        maior = num2 // Atualiza se o segundo número for maior
    }
    
    if (num3 > maior) {
        maior = num3 // Atualiza se o terceiro número for maior
    }

    return maior // Retorna o maior número encontrado
}
console.log(maiorDeTres(10, 5, 8)) 
console.log(maiorDeTres(2, 3, 1))  
console.log(maiorDeTres(7, 7, 7))  
   

// 3. Verificação de Idade
// Crie uma função chamada `verificaIdade` que recebe a idade (tipo: Number).
// Utilize uma estrutura condicional `if` para retornar "Menor de idade" ou "Maior de idade".


function verificaIdade(idade) {
    if (idade < 18) {
        return "Menor de idade"
    } else {
        return "Maior de idade"
    }
}
console.log(verificaIdade(16))
console.log(verificaIdade(18)) 
console.log(verificaIdade(21))


// 4. Classificação de Notas
// Crie uma função chamada `classificaNota` que recebe uma nota (tipo: Number).
// Utilize `if`, `else if` e `else` para retornar "Aprovado", "Recuperação" ou "Reprovado".

function classificaNota(nota) {
    if (nota >= 7) {
        return "Aprovado"
    } else if (nota >= 5) {
        return "Recuperação"
    } else {
        return "Reprovado"
    }
}
console.log(classificaNota(8))
console.log(classificaNota(6))
console.log(classificaNota(4))


// 5. Dia da Semana
// Crie uma função chamada `diaDaSemana` que recebe um número (tipo: Number) de 1 a 7.
// Utilize uma estrutura `switch` para retornar o nome do dia da semana correspondente.


function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo"
        case 2:
            return "Segunda-feira"
        case 3:
            return "Terça-feira"
        case 4:
            return "Quarta-feira"
        case 5:
            return "Quinta-feira"
        case 6:
            return "Sexta-feira"
        case 7:
            return "Sábado"
        default:
            return "Número inválido. Por favor, insira um número de 1 a 7."
    }
}
console.log(diaDaSemana(7))

// 6. Classificação de Animal
// Crie uma função chamada `classificaAnimal` que recebe uma string representando um animal dentre os seguintes: cachorro, gato, passarinho, salmão, lagarto.
// Utilize uma estrutura `switch` para retornar se é "Mamífero", "Ave", "Anfíbio", "Peixe".

function classificaAnimal(animal) {
    switch (animal.toLowerCase()) {
        case 'cachorro':
        case 'gato':
            return 'Mamífero';
        case 'passarinho':
            return 'Ave';
        case 'lagarto':
            return 'Anfíbio';
        case 'salmão':
            return 'Peixe';
        default:
            return 'Animal não classificado';
    }
}
console.log(classificaAnimal('cachorro'))
console.log(classificaAnimal('gato'))
console.log(classificaAnimal('passarinho'))
console.log(classificaAnimal('salmão'))
console.log(classificaAnimal('lagarto'))
console.log(classificaAnimal('elefante'))



// 7. Calculadora Simples
// Crie uma função chamada `calculadora` que recebe dois números e uma string representando uma operação (soma, subtração, multiplicação, divisão).
// Utilize uma estrutura `switch` para retornar o resultado da operação.

function calculadora(num1, num2, operacao) {
    let resultado;

    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtração':
            resultado = num1 - num2;
            break;
        case 'multiplicação':
            resultado = num1 * num2;
            break;
        case 'divisão':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                return 'Erro: Divisão por zero.';
            }
            break;
        default:
            return 'Erro: Operação inválida.';
    }

    return resultado;
}
console.log(calculadora(10, 5, 'soma'))        
console.log(calculadora(10, 5, 'subtração'))   
console.log(calculadora(10, 5, 'multiplicação'))
console.log(calculadora(10, 5, 'divisão'))       
console.log(calculadora(10, 0, 'divisão'))      
console.log(calculadora(10, 5, 'modulo'))        


// 8. Par ou Ímpar em uma Lista
// Crie uma função chamada `listaParOuImpar` que recebe um array de números.
// Utilize o método `map()` e uma estrutura condicional `if` para retornar uma nova lista com "Par" ou "Ímpar" para cada número.

function listaParOuImpar(numeros) {
    return numeros.map(num => {
        if (num % 2 === 0) {
            return "Par"
        } else {
            return "Ímpar"
        }
    })
}
const numeros = [1, 2, 3, 4, 5]
const resultado = listaParOuImpar(numeros)
console.log(resultado) 


// 9. Mensagem de Boas-Vindas
// Crie uma função chamada `mensagemBoasVindas` que recebe um nome (tipo: String) e um horário (tipo: Number).
// Utilize uma estrutura condicional `if`, `else if` e `else` para retornar uma mensagem apropriada: "Bom dia", "Boa tarde" ou "Boa noite".

function mensagemBoasVindas(nome, horario) {
    let mensagem

    if (horario >= 5 && horario < 12) {
        mensagem = "Bom dia";
    } else if (horario >= 12 && horario < 18) {
        mensagem = "Boa tarde";
    } else {
        mensagem = "Boa noite";
    }

    return `${mensagem}, ${nome}!`
}
console.log(mensagemBoasVindas("João", 10))  
console.log(mensagemBoasVindas("Nicolas", 15)) 
console.log(mensagemBoasVindas("Carlos", 20))


// 10. Classificação de Filmes
// Crie uma função chamada `classificaFilme` que recebe uma nota (tipo: Number) de um filme.
// Utilize uma estrutura condicional `if`, `else if` e `else` para retornar "Excelente" (nota 8 ou mais), 
// "Bom" (nota de 5 a 7) ou "Ruim" (nota abaixo de 5).

function classificaFilme(nota) {
    if (nota >= 8) {
        return "Excelente"
    } else if (nota >= 5) {
        return "Bom"
    } else {
        return "Ruim"
    }
}
console.log(classificaFilme(9))
console.log(classificaFilme(6))
console.log(classificaFilme(4))
