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

/* ---------------------> encripta o texto chamando a função encript(input.value) <--------------------- */
btnEncript.addEventListener("click", () => {
  if (isInvalid(input.value))
    alert("Letra maiúsculas e acentos não permitido!!!");
  else resultado.innerHTML = encript(input.value);
});

/* ---------------------> decripta o texto chamando a função decript(input.value) <--------------------- */
btnDecript.addEventListener("click", () => {
  if (isInvalid(input.value))
    alert("Letra maiúsculas e acentos não permitido!!!");
  else resultado.innerHTML = decript(input.value);
});

/* ---------------------> array de objetos com as regras de decodificação <--------------------- */
const codigoVogais = [
  { id: "a", text: "ai" },
  { id: "e", text: "enter" },
  { id: "i", text: "imes" },
  { id: "o", text: "ober" },
  { id: "u", text: "ufat" },
];

/* ---------------------> Faz a encriptação do input do usuário <--------------------- */
function encript(str) {
  const arrayEncriptada = [];
  for (const char of str) {
    const codigo = codigoVogais.find((item) => item.id === char);
    if (codigo) {
      arrayEncriptada.push(codigo.text);
    } else {
      arrayEncriptada.push(char);
    }
  }
  return arrayEncriptada.join("");
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
