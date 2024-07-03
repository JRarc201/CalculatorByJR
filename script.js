const minipantalla = document.querySelector("#minipantalla");
const pantalla = document.querySelector("#pantalla");
const buttons = document.querySelectorAll("button")

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(btn.id === "igualbt"){
            minipantalla.value = pantalla.value + "=";
            pantalla.value = eval(pantalla.value);
        }else if(btn.id === "c"){
            minipantalla.value = "";
            pantalla.value = "";
        }else if(btn.id === "DE"){
            pantalla.value = pantalla.value.slice(0, -1);
        }else{
            pantalla.value += btn.id;
        }
    })
});