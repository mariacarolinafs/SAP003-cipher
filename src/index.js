document.getElementById("encodeButton").addEventListener ("click", function pegaEncode() {
  let deslocamento = Number(document.getElementById("deslocamento").value);
  let mensagem = document.getElementById("mensagem").value;
  document.getElementById("resultado").innerHTML = window.cipher.encode(deslocamento, mensagem);
});

document.getElementById("decodeButton").addEventListener ("click", function pegaDecode() {
  let deslocamento = Number(document.getElementById("deslocamento").value);
  let mensagem = document.getElementById("mensagem").value;
  document.getElementById("resultado").innerHTML = window.cipher.decode(deslocamento, mensagem);
});