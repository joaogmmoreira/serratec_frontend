window.onload = function () {
  let age = prompt('Insira sua idade:');
  if (age === '') {
    alert('Por favor, insira sua idade.');
    return;
  }

  const ageNumerico = Number(age);
  if (isNaN(ageNumerico)) {
    alert('Por favor, insira um valor numérico válido.');
    return;
  }

  if (ageNumerico >= 18) {
    window.location.href = 'index2.html';

  } else {
    alert('Você não tem idade suficiente para acessar o conteúdo.');
    window.location.href = 'https://www.globo.com';
  }

}