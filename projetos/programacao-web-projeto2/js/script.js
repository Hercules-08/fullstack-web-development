const formulario = document.getElementById("contactForm");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if(formulario.checkValidity()) {
        alert("Mensagem enviada com sucesso!");

        formulario.reset();

    }else {
        formulario.reportValidity()
    }
});