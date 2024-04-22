//Exemplo de spread operator

funcoes = {
    "soma": (a, b) => a + b,
    "soma-v2": (a, b, c) => a + b + c,
} 

exercicios = {
    "soma": {
        "entradas": { "a": 1, "b": 2 }
    },
    "soma-v2": {
        "entradas": { "a": 11, "b": 3, "c": 6 }
    }
}

for (let exercicio in exercicios) {
    let entrada = exercicios[exercicio].entradas
    console.log(exercicio, ":", funcoes[exercicio](...Object.values(entrada)))
}
