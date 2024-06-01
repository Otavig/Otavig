document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const phoneValue = formData.get('phone_form').replace(/\D/g, ''); // Remover caracteres não numéricos
    const celular = phoneValue ? parseInt(phoneValue) : null; // Converter para número ou null se for vazio
    const data = {
      nome: formData.get('name_form'),
      email: formData.get('email_form'),
      celular: celular,
      msg: formData.get('msg_form')
    };

    if (data.nome.length > 255){
      alert('Inválido. Máximo de 255 caracteres!');
      return;
    } else if (data.msg.length > 200){
      alert('Inválido. Máximo de 200 caracteres!');
      return;
    } else if (data.email.length > 256){
      alert('Inválido. Máximo de 256 caracteres!')
      return;
    } else if (!data.celular || data.celular.toString().length > 15 || data.celular.toString().length < 11){
      alert('Inválido. Máximo e Mínimo de 15 números!')
      return;
    }

    fetch('http://localhost:3000/enviar-formulario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Resposta do servidor:', data);
      // Limpar os campos do formulário após o envio bem-sucedido
      document.getElementById('name_form').value = "";
      document.getElementById('email_form').value = "";
      document.getElementById('phone_form').value = "";
      document.getElementById('msg_form').value = "";
    })
    .catch(error => {
      console.error('Erro ao enviar formulário:', error);
    });
  });
});
