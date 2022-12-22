// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

// const encriptar = document.querySelector(".input-encript");
// const enviar = document.querySelector(".btn-encript");
// const resultado = document.querySelector(".resultado");

let inputEncriptar = "TESTE ÔI PARA VOCÊ!?";
const codigoVogais = [
  { id: "a", text: "ai" },
  { id: "e", text: "enter" },
  { id: "i", text: "imes" },
  { id: "o", text: "ober" },
  { id: "u", text: "ufat" },
];

function especialCharMask(especialChar) {
  especialChar = especialChar.replace(/[áàãâä]/gi, "a");
  especialChar = especialChar.replace(/[éèêë]/gi, "e");
  especialChar = especialChar.replace(/[íìîï]/gi, "i");
  especialChar = especialChar.replace(/[óòõôö]/gi, "o");
  especialChar = especialChar.replace(/[úùûü]/gi, "u");
  especialChar = especialChar.replace(/[ç]/gi, "c");
  especialChar = especialChar.replace(/[^a-z0-9]/gi, " ");
  especialChar = especialChar.replace(/_+/, " ");
  log(especialChar);
  return especialChar;
}

const { log, dir } = console;

function encriptar(texto) {
  const arrayEncriptada = [];
  for (const i of texto) {
    const codigo = codigoVogais.find((item) => {
      if (item.id === i) {
        return item.text;
      }
    });

    if (codigo == undefined) {
      arrayEncriptada.push(i);
    } else {
      arrayEncriptada.push(codigo.text);
    }
  }

  const encriptada = arrayEncriptada.join("");
  return encriptada;
}

function desencriptacao(desencriptada) {
  // const array = [];
  codigoVogais.filter((item) => {
    if (desencriptada.includes(item.text)) {
      desencriptada = desencriptada.replaceAll(item.text, item.id);
    }
  });
  return desencriptada;
}
inputEncriptar = inputEncriptar.toLocaleLowerCase();
let noCaracterer = especialCharMask(inputEncriptar);

const palavraEncriptada = encriptar(noCaracterer);
log(palavraEncriptada);
const palavraDesencriptada = desencriptacao(palavraEncriptada);
log(palavraDesencriptada);

// let teste = "Parabéns para Você, Ótima ideia!?";
// teste = teste.toLowerCase();
// let result = especialCharMask(teste);
// log(result);
// teste = teste.toLowerCase();

// teste = teste.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// log(teste);

// const secreta = desencriptacao(
//   "pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!"
// );
// log(secreta);
