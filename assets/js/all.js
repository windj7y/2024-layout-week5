const changeLink = () => {
  const links = document.querySelectorAll('.nav .nav-link');

  links.forEach(item => {
    item.classList.remove('active');

    const page = window.location.pathname.split('/').pop();
    if (item.getAttribute('href') === page) {
      item.classList.add('active');
    }
  });
}

changeLink();

const editAdmin = document.querySelector('#editAdmin');

if (editAdmin) {
  editAdmin.addEventListener('show.bs.modal', e => {
    const button = e.relatedTarget;
    const bsName = button.getAttribute('data-bs-name');
    const bsEmail = button.getAttribute('data-bs-email');

    const name = editAdmin.querySelector('.js-name');
    name.value = bsName;

    const email = editAdmin.querySelector('.js-email');
    email.value = bsEmail;
  })
}