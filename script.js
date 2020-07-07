// Pop-up de saída

$('body').on('mouseout', function() {
    $('#popup').show();
});

$('body').on('click', '.close-popup', function() {
    $('#popup').addClass('d-none');
});