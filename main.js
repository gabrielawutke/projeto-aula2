const botoes = document.querySelectorAll(".botao");

const tempoObjetivo1 = new Date("2023-08-18T15:37:07")
for(let i=0;i <botoes.length;i++){
botoes[i].onclick = function (){

for(let j=0;j<botoes.length;j++){
botoes[j].classList.remove("ativo");

}
botoes[i].classList.add("ativo");
}
}