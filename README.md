# **Cifra de César**

## Índice

* [1. Sobre](#1-sobre)
* [2. Definição do produto e usuário](#2-definição-do-produto-e-usuario)
* [3. Aprendizagem](#3-aprendizagem)
* [4. Checklist](#4-checklist)

***

## 1. Sobre:

Conta a história que Júlio César utilizava um código nas mensagens enviadas a seus generais, um sistema simples de substituição, no qual cada letra da mensagem original era trocada pela letra que se situa três posições à sua frente. Ficando da seguinte forma:

Cada letra “A” era substituída pela Letra “D”, “B” por “E” e assim sucessivamente.

Exemplo:
Normal:  a ligeira raposa marrom saltou sobre o cachorro cansado
Cifrado: D OLJHLUD UDSRVD PDUURP VDOWRX VREUH R FDFKRUUR FDQVDGR


![caeser-cipher](http://www.fernandosilva.pro.br/portal/images/Criptografia%202.png)

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.


Fontes: [Wikipédia link](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
        [Clube dos Geeks link](http://clubedosgeeks.com.br/sem-categoria/cifra-de-cesar-criptografia-monoalfabetica)



## 2. Definição do produto e usuário:

Nesse projeto pensei em criar um meio de comunicação entre Romeu e Julieta.

_"Já dentro do jazigo, Romeu bebe o veneno e morre ao lado de Julieta. Momentos depois, Julieta acorda e vê a seu lado, o corpo morto de seu marido. O Frei entra e conta a Julieta o que se passou. Inesperadamente, Julieta pega o punhal de Romeu e mata-se, pois já não tem motivos para viver."_

Se Romeu soubesse que Julieta não estava verdadeiramente morta talvez o final fosse diferente!

Esse projeto pode ser utilizado por qualquer casal vivendo um amor proibido ou impossível que precise enviar mensagens cifradas para evitar situações como a do grande clássico de Shakespeare. 

**Como utilizar:**
* Escreva a mensagem que quer cifrar ou decifrar no campo de mensagem.
* Escolha um número de deslocamento (lembrando: apenas numeros inteiros e positivos).
* Clique no botão referente ao que quer que aconteça com sua mensagem.
* Observe o resultado no campo do lado direito:



## 3. Aprendizagem

Neste projeto eu:

* Utilizei formulários para o usuário interagir podendo colocar sua mensagem a ser cifrada ou decifrada e a chave de deslocamento.
* Coloquei botões para que pudesse manipular esses resultados.
* Adicionei uma caixa para responder com a mensagem cifrada/decifrada.
* Manipulei as strings recebidas, tranformei-as em arrays e utilizei um forEach para executar a função em cada letra da mensagem recebida. Fiz o mesmo tanto para a função encode quanto para a decode.
* A função utilizei da seguinte maneira: recebendo a mensagem a ser cifrada/decifrada, separei as letras utilizando um .split e fiquei com uma array com as letras da mensagem, declarei uma array vazia para colocar dentro da mesma o resultado da função.
* Coloquei os resultados dentro da caixa que indica as respostas utilizando o getElementById.
* Fiz as provas unitárias para identificar erros no meu código.
* Escrevi esse ReadMe para explicar o projeto e a tragetória. 
* Observei a interface do usuário permite a ele eleger a posição de deslocamento, inserir sua mensagem e ver o resultado da mensagem.

_Utilizei ajuda do Trello e do fluxograma para realizar esse projeto._



## 4. Checklist


* [✓] `README.md` adicionar informação sobre o processo e decisões do desenho.
* [✓] `README.md` explicar claramente quem são os usuários e as suas relações
  com o produto.
* [✓] `README.md` explicar claramente como o produto soluciona os
  problemas/necessidades dos usuários.
* [✓] Usar VanillaJS.
* [✓] **Não** usar `this`.
* [✓] Implementar `cipher.encode`.
* [✓] Implementar `cipher.decode`.
* [ ] Passar o linter com a configuração definida.
* [✓] Passar as provas unitárias.
* [✓] Testes unitários cubrindo 70% dos _statements_, _functions_ e _lines_, e
  no mínimo 50% das _branches_.
* [✓] Interface que permita escolher o `offset` (chave de deslocamento) usava
  para cifrar/decifrar.
* [✓] Interface que permita escrever um texto para ser cifrado.
* [✓] Interface que mostre o resultado da cifra corretamente.
* [✓] Interface que permita escrever um texto para ser decifrado.
* [✓] Interface que mostre o resultado decifrado corretamente.

 **"Hacker edition"**

* [✓] Cifrar/decifrar minúsculas.
* [ ] Cifrar/decifrar _outros_ caractéres (espações, pontuação, `ç`, `á`, ...).
* [ ] Permitir usar `offset` negativo.
