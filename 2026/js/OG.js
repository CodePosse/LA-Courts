
$(window).on("load", function () {
    var current_title = $(document).attr('title');
    $('head').append('<meta property="og:title" content="' + current_title + '" />');
    $('head').append('<meta property="og:type" content="website" />');
    // Twitter Card Tags (for Social & Accessibility)
    $('head').append('<meta name="twitter:title" content="' + current_title + '" />');
    $('head').append('<meta name="twitter:description" content="' + current_title + '" />');
});
