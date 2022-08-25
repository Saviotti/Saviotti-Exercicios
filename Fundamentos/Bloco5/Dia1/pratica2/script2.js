let alterarParagrafos = document.getElementsByClassName("paragraph");

for(let i = 0; i < alterarParagrafos.length; i += 1) {
    alterarParagrafos[i].innerText = "Teste";
    alterarParagrafos[0].style.color = "red";
}

document.getElementsByTagName("h4").style.color = "red";

