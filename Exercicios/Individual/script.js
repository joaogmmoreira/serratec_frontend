let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.top = '-100px';
  } else {
    header.style.top = '0';
  }

  lastScrollTop = scrollTop;
});

function signNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if (!email) {
    alert('Por favor, preencha o campo de e-mail.');
    return;
  }
  alert(`O e-mail ${email} foi cadastrado com sucesso!`);
  document.getElementById('email').value = '';
  document.getElementById('name').value = '';
  document.getElementById('message').value = '';
}