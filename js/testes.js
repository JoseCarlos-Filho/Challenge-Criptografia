const { log, table, dir, time, timeEnd } = console;

const codigoVogais = [
  { id: "a", text: "ai" },
  { id: "e", text: "enter" },
  { id: "i", text: "imes" },
  { id: "o", text: "ober" },
  { id: "u", text: "ufat" },
];

// const callback = (val, ix, arr) => {
//   return { val: val, ix: ix, arr: arr };
// };

// const mapping = (str) => {
//   const mapeou1 = str.map(callback);
//   return mapeou1;
// };

// let stringText = "texto";
// let stringSplited = [...stringText];

// log(mapping(stringText));

// const mapeou = stringSplited.map((val, ix, arr) => {
//   return { val: val, ix: ix, arr: arr };
// });
// time("iniciando...");
// dir(mapping(codigoVogais));
// timeEnd("iniciando...");
// debugger;

const encript = (texto) => {
  const arrayEncriptada = [];
  [...texto].map((valor) => {
    const codigo = codigoVogais.find(({ id, text }) => valor == id);
    codigo !== undefined
      ? arrayEncriptada.push(codigo.text)
      : arrayEncriptada.push(valor);
  });

  const encriptada = arrayEncriptada.join("");
  return encriptada;
};

log(encript("Hello Word!?"));
