let playerHealth = 100;
let enemyHealth = 100;
let posX = 260;
let posY = 320;

document.addEventListener ('keydown', (e) => {
    if(e.key === "ArrowLeft" && posX > 10) posX -= 20;
    if(e.key === "ArrowRight" && posX < 510) posX += 20;
    document.getElementById("player").style.left = posX + "px";
    if(e.key === "ArrowUp" && posY > 10) posY -= 20;
    if(e.key === "ArrowDown" && posY < 305) posY +=20;
    document.getElementById("player").style.top = posY + "px";
})
function alterarVida(valor) {
    playerHealth += valor;
    if(playerHealth > 100) playerHealth = 100;
    if(playerHealth < 0) playerHealth = 0;
    let barra = document.getElementById("vida-player");
    barra.style.width = playerHealth + "%";
    barra.style.background = playerHealth > 60 ? "green" : playerHealth > 30 ? "yellow" : "red";
    if(playerHealth === 0) document.getElementById("dialogo").innerText = "Você perdeu!"
}

function abrirLoja() {
    let escolha = confirm("Deseja comprar uma poção de cura por 10 moedas?");
    if(escolha) alterarVida(30);
}

function ataqueEspecial() {
    enemyHealth -= 25;
    if(enemyHealth < 0) enemyHealth = 0;
    let barra = document.getElementById("vida-inimigo");
    barra.style.width = enemyHealth + "%";
    document.getElementById("enemy").style.transform = "scale(1.2)";
    setTimeout(() => document.getElementById("enemy").style.transform = "scale(1)", 200);
    if(enemyHealth === 0) document.getElementById("dialogo").innerText = "Você venceu!";
}