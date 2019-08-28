window.cipher = {
  encode: encode,
  decode: decode
};

function encode (deslocamento, mensagem) {
  let arrCodigo = [];
  let letras = mensagem.split("");
  letras.forEach(
    function testeEncode (letras) {
      if (letras.charCodeAt() >= 97 && letras.charCodeAt() <= 122) {
        arrCodigo +=(String.fromCharCode((letras.charCodeAt() - 97 + deslocamento) % 26 + 97));
      }
      else if (letras.charCodeAt() != 32) {
        arrCodigo +=(String.fromCharCode((letras.charCodeAt() - 65 + deslocamento) % 26 + 65));
      }
      else {
        arrCodigo += (String.fromCharCode(letras.charCodeAt()));
      }
    }
  );
  return arrCodigo;
}

function decode (deslocamento, mensagem) {
  let arrCodigoDecode = [];
  let letras = mensagem.split("");
  letras.forEach(
    function testeDecode (letras) {
      if (letras.charCodeAt() >= 97 && letras.charCodeAt() <= 122) {
        arrCodigoDecode +=(String.fromCharCode((letras.charCodeAt() - 122 - deslocamento) % 26 + 122));
      }
      else if (letras.charCodeAt() != 32) {
        arrCodigoDecode +=(String.fromCharCode((letras.charCodeAt() - 90 - deslocamento) % 26 + 90));
      } else {
        arrCodigoDecode += (String.fromCharCode(letras.charCodeAt()));
      }
    }
  );
  return arrCodigoDecode;
}