const axios = require("axios");

const config = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

function get_token(){
    return axios
        .post("https://tecweb-js.insper-comp.com.br/token", { username: "lucaslv2" }, config)
        .then((response) => response.data.accessToken);
}


function get_exercises(token){
    config.headers.Authorization = `Bearer ${token}`;
    return axios
        .get("https://tecweb-js.insper-comp.com.br/exercicio", config)
        .then((response) => response.data)
}

async function main(){
    let token = await get_token();
    let exercises = await get_exercises(token);
    console.log(exercises);

    // Ex 1
    function soma(a, b){
        return a + b;
    }
    let r_soma = soma(exercises.soma.entrada.a, exercises.soma.entrada.b);
    axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/soma", { 'resposta': r_soma }, config)
        .then((response) => console.log(response.data));

    // Ex 2
    function tamanho_string(string){
        return string.length;
    }
    let r_tamanho_string = tamanho_string(exercises['tamanho-string'].entrada.string);
    axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/tamanho-string", { 'resposta': r_tamanho_string }, config)
        .then((response) => console.log(response.data));

    // Ex 3
    function nome_do_usuario(email){
        let index = email.indexOf('@');
        return email.substring(0, index);
    }
    let r_nome_do_usuario = nome_do_usuario(exercises['nome-do-usuario'].entrada.email);
    axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/nome-do-usuario", { 'resposta': r_nome_do_usuario }, config)
        .then((response) => console.log(response.data));

    // Função para calcular o volume de uma pizza
    function volume_pizza(z, a) {
        return Math.round(Math.PI * Math.pow(z, 2) * a);
    }
    
    // Volume da pizza
    let r_volume_pizza = volume_pizza(exercises['volume-da-pizza'].entrada.z, exercises['volume-da-pizza'].entrada.a);
    axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/volume-da-pizza", { 'resposta': r_volume_pizza }, config)
        .then((response) => console.log(response.data));

    // MRU
    function mru(s0, v, t) {
        return s0 + (v * t);
    }
    let r_mru = mru(exercises['mru'].entrada.s0, exercises['mru'].entrada.v, exercises['mru'].entrada.t);
    axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/mru", { 'resposta': r_mru }, config)
        .then((response) => console.log(response.data));

    // Inverte string
    function inverte_string(string) {
        return string.split('').reverse().join('');
    }
    let r_inverte_string = inverte_string(exercises['inverte-string'].entrada.string);
    axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/inverte-string", { 'resposta': r_inverte_string }, config)
        .then((response) => console.log(response.data));

    // Soma valores
    function soma_valores(objeto) {
        let soma = 0;
        for (let valor of Object.values(objeto)) {
            soma += valor;
        }
        return soma;
    }
    let r_soma_valores = soma_valores(exercises['soma-valores'].entrada.objeto);
    axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/soma-valores", { 'resposta': r_soma_valores }, config)
        .then((response) => console.log(response.data));

    // N-ésimo primo
    function n_esimo_primo(n) {
        let numerosPrimos = [];
        let numeroAtual = 2;
        while (numerosPrimos.length < n) {
            if (ehPrimo(numeroAtual)) {
                numerosPrimos.push(numeroAtual);
            }
            numeroAtual++;
        }
        return numerosPrimos[n - 1];
    }

    function ehPrimo(numero) {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return numero > 1;
    }

    let r_n_esimo_primo = n_esimo_primo(exercises['n-esimo-primo'].entrada.n);
    axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/n-esimo-primo", { 'resposta': r_n_esimo_primo }, config)
        .then((response) => console.log(response.data));



    // Soma do segundo maior e menor números
    function soma_segundo_maior_e_menor_numeros(numeros) {
        numeros.sort((a, b) => a - b);
        return numeros[1] + numeros[numeros.length - 2];
    }

    let r_soma_segundo_maior_e_menor_numeros = soma_segundo_maior_e_menor_numeros(exercises['soma-segundo-maior-e-menor-numeros'].entrada.numeros);
    axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/soma-segundo-maior-e-menor-numeros", { 'resposta': r_soma_segundo_maior_e_menor_numeros }, config)
        .then((response) => console.log(response.data));

     // Conta palíndromos
     function conta_palindromos(palavras) {
        let contador = 0;
        for (let palavra of palavras) {
            if (ehPalindromo(palavra)) {
                contador++;
            }
        }
        return contador;
    }

    function ehPalindromo(palavra) {
        return palavra === palavra.split('').reverse().join('');
    }

    let r_conta_palindromos = conta_palindromos(exercises['conta-palindromos'].entrada.palavras);
    axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/conta-palindromos", { 'resposta': r_conta_palindromos }, config)
        .then((response) => console.log(response.data));

    
    // Soma de strings de ints
    function soma_de_strings_de_ints(strings) {
        return strings.map(Number).reduce((acc, curr) => acc + curr, 0);
    }

    let r_soma_de_strings_de_ints = soma_de_strings_de_ints(exercises['soma-de-strings-de-ints'].entrada.strings);
    axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/soma-de-strings-de-ints", { 'resposta': r_soma_de_strings_de_ints }, config)
        .then((response) => console.log(response.data));

}

main();
