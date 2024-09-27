$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();

        const nomeTarefaNova = $("#novaTarefa").val();
        const novaTarefa = $('<li style="display: none;"></li>');

        $(`<p>${nomeTarefaNova}</p>`).appendTo(novaTarefa);
        $(`   
            <div class="options" style="display: none;">
                <button type="button" class="completebtn">Completo</button>
                <button type="button" class="dltbtn">Apagar</button>
            </div>
        `).appendTo(novaTarefa);

        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn(300);
        $('#novaTarefa').val('');

        // Mostra as opções somente para o item da lista clicado
        novaTarefa.click(function () {
            $(this).find('.options').fadeToggle(100); // Mostra/esconde a div options desse item específico
        });

        // Marcar como completo apenas o item correspondente
        novaTarefa.find('.completebtn').click(function () {
            $(this).closest('li').find('p').toggleClass('complete'); // Adiciona a classe 'complete' apenas no p deste item
        });

        // Apagar apenas o item correspondente
        novaTarefa.find('.dltbtn').click(function () {
            $(this).closest('li').fadeOut(300, function () {
                $(this).remove(); // Remove o item da lista
            });
        });
    });
});