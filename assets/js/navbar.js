var $ = require( "jquery" );

$(function () {

    var collapsible = $("#header-nav .navbar-collapse.collapse");
    var hamburger = $("#header-nav .navbar-toggler");

    collapsible.on("show.bs.collapse", function () {
        hamburger.addClass("opened");
    });

    collapsible.on("hide.bs.collapse", function () {
        hamburger.removeClass("opened");
    });

});
