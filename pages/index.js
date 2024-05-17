<script>
    let isShowingContainer = false;

    function showContainer(containerNumber) {
    if (isShowingContainer) {
        return; // Se já estiver mostrando um container, não faz nada
    }

    isShowingContainer = true;

    const containers = document.querySelectorAll('.content-container');

    // Esconde todos os containers
    containers.forEach(container => container.classList.remove('active'));

    // Mostra o esqueleto por 0.3 segundos
    const skeletonContainer = document.getElementById('skeleton-container');
    skeletonContainer.classList.add('active');
    setTimeout(() => {
        skeletonContainer.classList.remove('active');
    // Mostra o container correspondente após 0.3 segundos
    document.getElementById(`container${containerNumber}`).classList.add('active');

    // Atualiza o armazenamento da sessão com o novo container ativo
    sessionStorage.setItem('activeContainer', containerNumber);

        setTimeout(() => {
        isShowingContainer = false; // Permite mostrar outro container após 500ms
        }, 500);
    }, 300); // 300 milissegundos = 0.3 segundos
}

    window.onload = function() {
    // Obtém o número do container ativo do armazenamento da sessão ou usa 1 se não houver nenhum
    const activeContainer = sessionStorage.getItem('activeContainer') || 1;
    showContainer(activeContainer); // Exibe o container ativo quando a página for carregada
};

    //// Botões 

    //botao 1
    document.getElementById('btn-container1').addEventListener('click', function() {
        showContainer(1);
        changeButtonClass(this);
        });

    //botao 2
    document.getElementById('btn-container2').addEventListener('click', function() {
        showContainer(2);
        changeButtonClass(this);
        });




    // Função que troca a classe do botão
        function changeButtonClass(button) {
            button.classList.remove('btn-container');
            button.classList.add('btn-container-ativo');
        }


</script>
