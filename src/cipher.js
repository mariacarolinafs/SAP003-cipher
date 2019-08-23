window.cipher = {
  encode: encode,
  decode: decode
};

function encode (deslocamento, mensagem) {
  let arrCodigo = [];
  let mensagemGrande = mensagem.toUpperCase();
  let letras = mensagemGrande.split("");
  letras.forEach(
    function testeEncode (letras) {
      if (letras.charCodeAt() != 32) {
        arrCodigo +=(String.fromCharCode((letras.charCodeAt() - 65 + deslocamento) % 26 + 65));
      } else {
        arrCodigo += (String.fromCharCode(letras.charCodeAt()));
      }
    }
  );
  return arrCodigo;
}

function decode (deslocamento, mensagem) {
  let arrCodigoDecode = [];
  let mensagemGrande = mensagem.toUpperCase();
  let letras = mensagemGrande.split("");
  letras.forEach(
    function testeDecode (letras) {
      if (letras.charCodeAt() != 32) {
        arrCodigoDecode +=(String.fromCharCode((letras.charCodeAt() - 65 - deslocamento) % 26 + 65));
      } else {
        arrCodigoDecode += (String.fromCharCode(letras.charCodeAt()));
      }
    }
  );
  return arrCodigoDecode;
}