// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let paragraphs = document.querySelectorAll('#aliens p');


for (let p of paragraphs) {
    let button = p.querySelector('button');
    if (button) {
        button.addEventListener('click', function() {
            p.classList.toggle('expandido');
            button.innerHTML = {'+': '-',
                                '-': '+' }[button.innerHTML]
        });
    }
}