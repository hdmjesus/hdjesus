import Cliente from './Cliente.js';

class Form {
  constructor() {
    this.$btnForm = document.getElementById('btn-form');
    this.formStart = document.getElementById('form-start');

    this.name = document.getElementById('name');
    this.email = document.getElementById('email');
    this.q1 = document.getElementById('question1');
    this.expresionEmail = /\w+@\w+\.+[a-z]/;
    this.users = [];
    this.startForm();
  }

  startForm() {
    this.$btnForm.addEventListener('click', (event) => {
      event.preventDefault();
      this.validarDatos();
    });
  }

  validarDatos() {
    if (this.name.value === '' || this.email.value === '') {
      alert('Ambos campos son obligatorios');
      return false;
    }
    if (this.name.value.length > 20 || this.name.value.length < 3) {
      alert('El nombre debe tener entre 3 a 20 caracteres');
      return false;
    }
    if (!this.expresionEmail.test(this.email.value)) {
      alert('El correo tiene un formato invalido');
    } else {
      this.nextQuestion(this.formStart, this.q1);
      const usuario = new Cliente(this.name.value, this.email.value);
      this.users.push(usuario);
      this.showData();
    }
  }

  nextQuestion(hidden, show) {
    hidden.classList.add('data-off');
    show.classList.remove('data-off');
  }

  showData() {
    console.log(this.users);
  }
}

export default Form;
