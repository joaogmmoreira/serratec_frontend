function changeText() {
  document.querySelector('p').innerHTML = 'Olá, mundo!';
}

function like() {
  let likes = document.getElementById('likesQty');
  likes.innerHTML = parseInt(likes.innerHTML) + 1;
}

function dislike() {
  let likes = document.getElementById('likesQty');
  let likesQty = parseInt(likes.innerHTML);
  if (likesQty === 0) {
    likesQty = 0;
    alert('Não é possível ter likes negativos');
    return likesQty;
  }
  likes.innerHTML = likesQty - 1;
}

function welcome() {
  let name = prompt('Qual é o seu nome?');
  alert(`Olá, ${name}!`);
}

function clickHere() {
  let button = document.getElementById('click');
  if (button.innerHTML === 'Obrigado por Clicar!') {
    button.innerHTML = 'Clique aqui!';
    return;
  }

  button.innerHTML = 'Obrigado por Clicar!';
}