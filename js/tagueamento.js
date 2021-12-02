// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

var btnContato = document.getElementById("entre_em_contato");
var btnDownload = document.getElementById("download_pdf");
var imgLorem = document.getElementById("lorem_div")
var imgIpsum = document.getElementById("ipsum_div");
var imgDolor = document.getElementById("dolor_div");
var txtNome = document.getElementById("nome");
var txtEmail = document.getElementById("email");
var txtTelefone = document.getElementById("telefone");
var chkAceito = document.getElementById("aceito");
var btnEnviar = document.getElementById("enviar");

function ga_send_event(category, action, label) {
    ga('send', 'event', category, action, label);
}

function load() {
    btnContato.addEventListener("click", function(){ga_send_event("menu", "entre_em_contato", "link_externo")}, false);
    btnDownload.addEventListener("click", function(){ga_send_event("menu", "download_pdf", "download_pdf")}, false);

    if(window.location.pathname.split("/").pop() == "analise.html"){
        imgLorem.addEventListener("click", function(){ga_send_event("analise", "ver_mais", "Lorem")}, false);
        imgIpsum.addEventListener("click", function(){ga_send_event("analise", "ver_mais","Ipsum")}, false);
        imgDolor.addEventListener("click", function(){ga_send_event("analise", "ver_mais","Dolor")}, false);
    }

    if(window.location.pathname.split("/").pop() == "sobre.html"){
        txtNome.addEventListener("change", function(){ga_send_event("contato", "nome","preencheu")}, false);
        txtEmail.addEventListener("change", function(){ga_send_event("contato", "email", "preencheu")}, false);
        txtTelefone.addEventListener("change", function(){ga_send_event("contato", "telefone", "preencheu")}, false);
        chkAceito.addEventListener("click", function(){ga_send_event("contato", "aceito", "preencheu")}, false);
        btnEnviar.addEventListener("click", function(){ga_send_event("contato", "enviado", "enviado")}, false);
    }
}

document.addEventListener("DOMContentLoaded", load(), false);