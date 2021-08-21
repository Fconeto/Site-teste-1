var menu = $(".menu-hamb");
var main = $("main");
var footer = $("footer");

function openMenu() {
    menu = menu.toggleClass("on");
    main = main.toggleClass("off");
    footer = footer.toggleClass("off");

}