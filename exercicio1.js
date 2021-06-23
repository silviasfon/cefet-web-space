// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

function calculateGravitationalForce(G, M_1, M_2, d) {
    return (G * M_1 * M_2)/d ** 2;
}

let buttonCalculate = document.querySelector('#calcular');
buttonCalculate.addEventListener('click', function() {
    const G = document.querySelector('#constante').value;
    const M_1 = document.querySelector('#massa1').value;
    const M_2 = document.querySelector('#massa2').value;
    const d = document.querySelector('#distancia').value;
    document.querySelector('#resultado').value = calculateGravitationalForce(G, M_1, M_2, d);
});