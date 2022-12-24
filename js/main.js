// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

/* ---------------------> input, output and actions <--------------------- */
const input = document.querySelector(".input-encript");
const btnEncript = document.querySelector(".btn-encript");
const btnDecript = document.querySelector(".btn-decript");
const btnCopiar = document.querySelector(".btn-copiar");
const resultado = document.querySelector(".resultado");

/* ---------------------> Regras de validação <--------------------- */
const isInvalid = (input) => {
  const reg = /[A-Z]+/g;
  const regExpressao = /[\u0300-\u036f]/g;

  const result = [...input].some(
    (c) => reg.test(c) || regExpressao.test(c.normalize("NFD"))
  );
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

/* ---------------------> botão copiar acionado pelo evento de click  <--------------------- */
btnCopiar.addEventListener("click", () => {
  return copyToClipboardAsync(resultado.innerHTML);
});

/* ---------------------> array de objetos com as regras de decodificação <--------------------- */
const codigoVogais = [
  { id: "a", text: "ai" },
  { id: "e", text: "enter" },
  { id: "i", text: "imes" },
  { id: "o", text: "ober" },
  { id: "u", text: "ufat" },
];

/* ---------------------> realiza a cópia do texto <--------------------- */
const copyToClipboardAsync = (str) => {
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
