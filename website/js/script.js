$(window).on('click', function(event){
    var clickOver = $(event.target)
    if ($('.navbar .navbar-toggle').attr('aria-expanded') == 'true' && clickOver.closest('.navbar').length === 0) {
        $('button[aria-expanded="true"]').click();
    }
});
