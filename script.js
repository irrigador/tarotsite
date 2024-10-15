function selectRandomItems(numItems) {
    const items = document.querySelectorAll('#itemList li');
    const selectedItems = [];
    
    while (selectedItems.length < numItems) {
        const randomIndex = Math.floor(Math.random() * items.length);
        const randomItem = items[randomIndex];
        if (!selectedItems.includes(randomItem)) {
            selectedItems.push(randomItem);
        }
    }

    // Montando o HTML de saída
    let resultHTML = '<h2>Sorte das cartas:</h2><ul>';
    selectedItems.forEach(item => {
        const itemName = item.querySelector('.item-text').textContent.trim(); // Nome do item
        const description = item.querySelector('.descricao').textContent.trim(); // Descrição
        resultHTML += `<li>${itemName}<br>${description}</li>`;
    });
    resultHTML += '</ul>';
    
    // Atualizando o conteúdo do resultado
    document.getElementById('result').innerHTML = resultHTML;
}

// jQuery para mostrar a descrição com efeito de girar
$(document).ready(function() {
    $('#itemList li').hover(
        function() {
            $(this).find('.descricao').addClass('show-descricao');
            $(this).find('img').css('opacity', '0.2'); // Reduz a opacidade da imagem
        },
        function() {
            $(this).find('.descricao').removeClass('show-descricao');
            $(this).find('img').css('opacity', '1'); // Restaura a opacidade da imagem
        }
    );
});