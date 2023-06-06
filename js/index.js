$(document).ready(function () {
    $(".send").click(function () {
        var name = $('#name').val() ?? '';
        var email = $('#email').val() ?? '';
        var product = $('#product').val();
        var desc = $('#description').val() ?? '';

        var txt = `Permisi, Mau beli ${product}%0ANama : ${name}%0AEmail : ${email}%0A%0ADesk : : ${desc}`
        window.location.href = "https://wa.me/6283834685279?text="+txt
        // console.log(name, email, product, desc)
    });
});