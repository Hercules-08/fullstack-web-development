const btnClick = document.getElementById("btnClick");
const output = document.getElementById("output");
const textInput = document.getElementById("textInput");
const linkInfo = document.getElementById("linkInfo");
const formExemplo = document.getElementById("formExemplo");
const numInput = document.getElementById("numInput");

btnClick.addEventListener("click", () => {
    output.textContent = "Botão clicado!";
});

textInput.addEventListener("input", ()=> {
    output.textContent = textInput.value;
}); 

linkInfo.addEventListener("mouseover", ()=> {
    linkInfo.style.backgroundColor = "green";
});

linkInfo.addEventListener("mouseout", ()=> {
    linkInfo.style.backgroundColor = "";
})

linkInfo.addEventListener("click", (event)=> {
    event.preventDefault();
});

formExemplo.addEventListener("submit", (event)=> {
    event.preventDefault();

    const valor = Number(numInput.value);

    const dobro = valor * 2;

    output.textContent = `O dobro de ${valor} é ${dobro}`;

});

