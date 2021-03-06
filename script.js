// Pop-up de saída
let clicado = false

function openModal() {
    const closeModal = document.querySelector(".modal__close-icon")
    const modalOverlay = document.querySelector(".modal-overlay")

    if (!clicado) {
        modalOverlay.classList.add("modal-overlay--active")
        closeModal.addEventListener("click", function () {
            modalOverlay.classList.remove("modal-overlay--active")
        })
        clicado = true;
    }
}

// contagem regressiva

setInterval(function () {

    var target_date = new Date("jul 08, 2020 20:00:00").getTime();
    var dias, horas, minutos, segundos;
    var regressiva = document.getElementById("regressiva")
    var current_date = new Date().getTime();
    var segundos_f = (target_date - current_date) / 1000;

    dias = parseInt(segundos_f / 86400);
    segundos_f = segundos_f % 86400;

    horas = parseInt(segundos_f / 3600);
    segundos_f = segundos_f % 3600;

    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);

    if (dias <= 0 && horas <= 0 && minutos <= 0 && segundos <= 0) {
        document.getElementById('contagem').classList.add("hide-contagem");
    } else {
        document.getElementById('dia').innerHTML = dias;
        document.getElementById('hora').innerHTML = horas;
        document.getElementById('minuto').innerHTML = minutos;
        document.getElementById('segundo').innerHTML = segundos;
    }

}, 1000);