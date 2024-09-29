
const botaoForm= document.getElementById('btn-form');
const botaoSobre= document.getElementById("sobre-botao");
const saberMais =document.getElementById('saber-mais');
const fechar=document.getElementById("fechar-sobre-box");
let nome =document.getElementById('nome');
let email =document.getElementById('email');

const carrosel = [
    'image/fundo1.jpg',
    'image/fundo2.jpg',
    'image/fundo3.jpg',
];

const navIntro= document.querySelector('.nav-intro');

let Index =0;
function alterarImagem(){
    navIntro.style.backgroundImage=`url(${carrosel[Index]})`;
    Index=(Index +1) %carrosel.length;
}
setInterval(alterarImagem, 8000);


botaoSobre.addEventListener('click',function(){
    saberMais.style.display="block";
});
fechar.addEventListener('click',function(){
    saberMais.style.display="none";

});

botaoForm.addEventListener('click',function(){
    if (nome.value.trim() === "" ) {
        alert("Ops! Você precisa adicionar suas informações");
    } else {
        alert(`Parabéns ${nome.value}, vamos entrar em contato com você assim que possível`);
    }
});
