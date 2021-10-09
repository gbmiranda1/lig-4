let vez = true
let evt1;
let evt2;
var audioIntro = document.querySelector("#musicaintro");
audioIntro.autoplay = true;
console.log(audioIntro)
const listaPersonagens = document.querySelectorAll(".img-personagem")


listaPersonagens.forEach(disco => {
    disco.addEventListener("click", escolherPersonagem)
})

function escolherPersonagem(evt) {
    if (vez) {
        jogador1 = evt.target.id
        vez = false
        evt.target.style.border = "5px solid white"
        audioIntro.pause();
        document.querySelector("#escolher").play();
        setTimeout(function() {
            audioIntro.play();
            evt1 = evt.target
        }, 1500)
    } else if (jogador1 != evt.target.id) {
        evt.target.style.border = "5px solid white"
        evt2 = evt.target
        audioIntro.pause();
        document.querySelector("#escolher").currentTime = 0;
        document.querySelector("#escolher").play();
        setTimeout(function() {

            audioIntro.currentTime = 0;
            audioIntro.play();
            jogador2 = evt.target.id
            document.querySelector("#jogador-1").innerText = jogador1;
            document.querySelector("#jogador-1").classList.add("pisca")
            document.querySelector("#jogador-2").innerText = jogador2;
            document.querySelector(".nomes-jogadores").style.display = "flex";
            document.querySelector("#vs").innerText = " VS ";
            document.querySelector(".pop-up").style.display = "none";
            vez = true
            evt1.style.border = "5px solid black"
            evt2.style.border = "5px solid black"
            criarTabuleiro(3, 3)
            inicializarMatriz(3, 3)
        }, 1500)

    } else {
        vez = true
        evt.target.style.border = "5px solid black"
    }
}