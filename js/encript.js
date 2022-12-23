// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

/* ---------------------> input, output and actions <--------------------- */
const input = document.querySelector(".input-encript");
const btnEncript = document.querySelector(".btn-encript");
const btnDecript = document.querySelector(".btn-decript");
const resultado = document.querySelector(".resultado");

/* ---------------------> Regras de validação <--------------------- */
const isInvalid = (input) => {
  const reg = /[A-Z]+/g;
  const regExpressao = /[\u0300-\u036f]/g;

  const result = [...input].some(
    (c) => reg.test(c) || regExpressao.test(c.normalize("NFD"))
  );
  // log(isInvalid);
  return result;
};

// enviar.addEventListener("click", (e) => {
//   const clico =
// })

let inputEncriptar = "A vida é belissíma!!!";
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
