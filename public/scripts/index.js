

function addOnTable(item) {
    var url = window.location.origin + '/l/' + item.uri
    $(".table-body").prepend(`
    <tr class="table-body-element">
        <td>
            <div class="url-main">
                <a target="_blank" href="${item.main}">${item.main}</a>
            </div>
        </td>
        <td>
            <a target="_blank" href="${url}">${url}</a>
        </td>
        <td>
            <div>
                <button class="button-copy" onclick="copyText('${url}')">Copy</button>
            </div>
        </td>
    </tr>
    `)
}

function reloadUrls() {
    var token = getCookie("token");

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    fetch(`http://localhost:3333/find/urls/${token}`, options)
        .then(response => response.json())
        .then(response => {
            if (response.length > 0) {
                $(".container").css("display", "flex");
                $(".loading").css("display", "flex");
                $(".table-body-element").remove();

                response.forEach(element => {
                    addOnTable(element)
                });

                $(".loading").css("display", "none");
            } else {
                $(".loading").css("display", "none");
            }
        })
        .catch(err => console.error(err));
}

$(".btn").click(function () {
    var token = getCookie("token");

    if (token == '') {
        alert('Você não está logado');
        return;
    }

    if ($(".input-name").val() == "") {
        alert("O campo de url está vazio!")
        return;
    }

    $(".loading").css("display", "flex");
    var url = $(".input-name").val();

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, url })
    };

    fetch('http://localhost:3333/create/url', options)
        .then(response => response.json())
        .then(() => {
            $(".input-name").val("");
            reloadUrls()
        })
        .catch(err => console.error(err));

})

function logout() {
    $('.confirm-modal').addClass('show');
    $('.confirm-message').addClass('show');

    $('#yesButton').click(() => {
        setCookie('token', '');
        location.reload();
    })

    $('#noButton').click(() => {
        $('.confirm-modal').removeClass('show');
        $('.confirm-message').removeClass('show');
    })
}

function main() {
    var token = getCookie("token");

    if (token != '') {
        reloadUrls();
        $('.nav-bar').prepend(`
            <button onclick="logout()" class="item-nav">Logout</button>
        `)
    } else {
        $('.nav-bar').prepend(`
            <a href="/login" id="login" class="item-nav">Login</a>
            <a href="/register" id="register" class="item-nav">Register</a>
        `)
    }

}


main();