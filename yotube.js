
$('.hamburger').click(() => {
    $('.lateral').toggle('1')
})



function horasCerta() {
    const date = new Date;

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dataFormatada = document.getElementById('data').innerHTML = `${day}/${month}/${year}`;

    let horas = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();
    let horaioFormatado = document.getElementById('horas').innerHTML = `${horas}:${minutos}:${segundos}`;
}

setInterval(horasCerta);
