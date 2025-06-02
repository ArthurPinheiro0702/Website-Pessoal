// Função interna que anima a escrita do texto
    function ativaLetra(elemento){
        // Converte o conteúdo do elemento em um array de letras
        const arrTexto = elemento.innerHTML.split('');
        
        // Limpa o conteúdo original do elemento
        elemento.innerHTML = '';
        
        // Para cada letra do array, executa a função após um tempo
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                // Acrescenta a letra no elemento com intervalo de 75ms
                elemento.innerHTML += letra;
            }, 75 * i); // Tempo baseado na posição da letra
        });
    }

    // Seleciona o elemento com a classe 'digitando'
    const titulo = document.querySelector(`.digitando`);
    
    // Executa a função de animação passando o elemento selecionado
    ativaLetra(titulo);


// Seleciona o ícone do menu (normalmente o "hamburger", com classe 'fa-bars')
const ativaMenu = document.querySelector(`.fa-bars`);

// Seleciona o menu de navegação principal dentro do header
const navMenu = document.querySelector(`header .nav-primaria`);

// Adiciona um evento de clique no ícone do menu
ativaMenu.addEventListener(`click`, () => {
    // Alterna a classe 'fa-x' no ícone (para mudar de 'fa-bars' para 'fa-x')
    ativaMenu.classList.toggle(`fa-x`);
    
    // Alterna a classe 'ativado' no menu de navegação (para mostrar ou ocultar)
    navMenu.classList.toggle(`ativado`);
});

