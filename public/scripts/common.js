function copyText(text) {
    navigator.clipboard.writeText(text);
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

$('.toggle-switch').click(function () {
    $('body').toggleClass("dark-mode");
    if ($('.toggle-switch').is(':checked')) {
        $('.img-toggle').prop('src', '/svg/moon.svg')
        setCookie('isdark', true)
    } else {
        $('.img-toggle').prop('src', '/svg/sun.svg')
        setCookie('isdark', false)
    }
})

$(document).ready(function () {
    $(".toggle").click(function () {
        $(".nav-bar").slideToggle();
        $(this).toggleClass("active");
    });
});

function start() {
    var dark = getCookie('isdark');
    if (dark == 'true') {
        $('.toggle-switch').click();
    }
}

start();