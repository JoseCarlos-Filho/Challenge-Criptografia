// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

/* ---------------------> input, output and actions <--------------------- */
const container = document.querySelector(".container");
const input = document.querySelector(".input-textarea");
const btnEncript = document.querySelector(".btn-cripto");
const btnDecript = document.querySelector(".btn-decripto");
const btnCopiar = document.querySelector(".btn-copiar");
const resultado = document.querySelector(".resultado");
const visibilities = document.querySelector(".bloco-output");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const fade = document.querySelector(".fade");

/* ---------------------> array de objetos com as regras de decodificação <--------------------- */
const codigoVogais = [
  { id: "a", text: "ai" },
  { id: "e", text: "enter" },
  { id: "i", text: "imes" },
  { id: "o", text: "ober" },
  { id: "u", text: "ufat" },
];

/* ---------------------> Função carrega page <--------------------- */

window.onload = setInterval(() => {
  document.querySelector(".loading").classList.add("esconde");
  document.querySelector(".conteudo").classList.remove("esconde");
}, 5000);

/* ---------------------> Função com as ações funcionais da aplicação <--------------------- */
container.addEventListener("click", (evento) => {
  const elTarget = evento.target;
  if (elTarget.className.includes("btn-cripto")) {
    console.log("clico!");
    (isInvalid(input.value) || input.value === "") && fechaModal();
    resultado.innerHTML = encript(input.value);
    exibiInputSaida();
  }

  if (elTarget.className.includes("btn-decripto")) {
    console.log("clico!");
    (isInvalid(input.value) || input.value === "") && fechaModal();
    resultado.innerHTML = decript(input.value);
    exibiInputSaida();
  }

  if (elTarget.className.includes("close-modal")) {
    console.log("clico!");
    fechaModal();
  }

  if (elTarget.className.includes("btn-copiar")) {
    console.log("clico!");
    copiaParaAreaDeTranferencia(resultado.innerHTML);
    // resultado.innerHTML = "";
  }
});

/* ---------------------> Mostra Modal de Mensagens <--------------------- */

const fechaModal = () => {
  // forma resumida.
  resultado.innerHTML = "";
  [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

/* ---------------------> Regras de validação <--------------------- */
const isInvalid = (input) => {
  const reg = /[A-Z]+/g;
  const regExpressao = /[\u0300-\u036f]/g;

  const result = [...input].some(
    (c) => reg.test(c) || regExpressao.test(c.normalize("NFD"))
  );
  return result;
};

/* ---------------------> visibilidade do output  <--------------------- */

const exibiInputSaida = () => {
  visibilities.classList.add("invisivel");
  resultado.classList.remove("invisivel");
  btnCopiar.classList.remove("invisivel");
};

/* ---------------------> realiza a cópia do texto <--------------------- */
const copiaParaAreaDeTranferencia = (str) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject("The Clipboard API is not available.");
};

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

/* ---------------------> Faz a decript do input do usuário <--------------------- */
function decript(str) {
  // const array = [];
  codigoVogais.filter((item) => {
    if (str.includes(item.text)) {
      str = str.replaceAll(item.text, item.id);
    }
  });
  return str;
}
