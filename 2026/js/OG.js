
$(window).on("load", function () {
    var current_title = $(document).attr('title');
    $('head').append('<meta property="og:title" content="' + current_title + '" />');
    $('head').append('<meta property="og:description" content="' + current_title + '" />');
    $('head').append('<meta property="og:type" content="website" />');
    $('head').append('<meta property="og:url" content="' + window.location.href + '" />');
    // Twitter Card Tags (for Social & Accessibility)
    $('head').append('<meta name="twitter:title" content="' + current_title + '" />');
    $('head').append('<meta name="twitter:description" content="' + current_title + '" />');
    $('head').append('<meta name="twitter:card" value="summary_large_image" />');
});
