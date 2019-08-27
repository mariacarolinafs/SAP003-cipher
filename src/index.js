document.getElementById("encodeButton").addEventListener ("click", function pegaEncode() {
  let mensagem = document.getElementById("mensagem").value;
  let deslocamento = Number(document.getElementById("deslocamento").value);
  document.getElementById("resultado").innerHTML = window.cipher.encode(deslocamento, mensagem);
});

document.getElementById("decodeButton").addEventListener ("click", function pegaDecode() {
  let mensagem = document.getElementById("mensagem").value;
  let deslocamento = Number(document.getElementById("deslocamento").value);
  document.getElementById("resultado").innerHTML = window.cipher.decode(deslocamento, mensagem);
});