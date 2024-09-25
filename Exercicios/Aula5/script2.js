function aprovedOrNot() {
  const nota = prompt('Insira sua nota:');
  if (nota === '') {
    alert('Por favor, insira uma nota.');
    return;
  }

  const notaNumerica = parseFloat(nota);
  if (isNaN(notaNumerica)) {
    alert('Por favor, insira um valor numérico válido.');
    return;
  }

  if (notaNumerica >= 6) {
    alert('Aprovado!');
  } else {
    alert('Reprovado.');
  }
}

function evenOrOdd() {
  const number = prompt('Insira um número:');
  if (number === '') {
    alert('Por favor, insira um número.');
    return;
  }

  const numberNumerico = parseFloat(number);
  if (isNaN(numberNumerico)) {
    alert('Por favor, insira um valor numérico válido.');
    return;
  }

  if (numberNumerico % 2 === 0) {
    alert('Par!');
  } else {
    alert('Ímpar!');
  }
}

const arr = ['JavaScript', 'Java', 'Python', 'C#', 'C++', 'C', 'Swift', 'Kotlin', 'Ruby', 'PHP'];

function isJsASkill1(arr) {

  const jsIndex = arr.indexOf('JavaScript');

  if (jsIndex !== -1) {
    return console.log('Habilidade encontrada! JavaScript está na posição ' + jsIndex + ' do array.');
  }
  return console.log('Habilidade não encontrada!');
}

isJsASkill1(arr);

function isJsASkill2(arr) {

  const jsIndex = arr.filter((item) => item === 'JavaScript').length - 1;

  if (jsIndex !== -1) {
    return console.log('Habilidade encontrada! JavaScript está na posição ' + jsIndex + ' do array.');
  }
  return console.log('Habilidade não encontrada!');
}

isJsASkill2(arr);

function isJsASkill3(arr) {
  const jsIndex = arr.findIndex((item) => item === 'JavaScript');

  if (jsIndex !== -1) {
    return console.log('Habilidade encontrada! JavaScript está na posição ' + jsIndex + ' do array.');
  }
  return console.log('Habilidade não encontrada!');
}

isJsASkill3(arr);