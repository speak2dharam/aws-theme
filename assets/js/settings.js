$(document).ready(function () {
    var menuStatus = localStorage.getItem('menuCollapsed');
    console.log(menuStatus)
    if (menuStatus == 'true') {
        collapseMenu();
    }
    if (menuStatus == 'false') {
        expandMenu();
    }
});
//function menuToggle() {
//    $("body").toggleClass("navbar-vertical-collapsed");
//}
function expandMenu() {
    $("body").removeClass("navbar-vertical-collapsed");
    $("#expandMenu").hide();
    $("#collapseMenu").show();
    localStorage.setItem('menuCollapsed', false);
}
function collapseMenu() {
    $("body").addClass("navbar-vertical-collapsed");
    $("#expandMenu").show();
    $("#collapseMenu").hide();
    localStorage.setItem('menuCollapsed', true);
}

function hidemenumobile() {
    $(".sidebar").hide();
    $(".mobmenubg").hide();
}
function showmenumobile() {
    //$("#mobmenubg").addClass("d-block");
    $(".mobmenubg").show();
    $(".sidebar").show();
}