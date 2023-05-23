import { useState } from 'react';
import '../css/contactme.css'
import axios from 'axios';

const ContactMe = () => {
  const [nombre, setNombre] = useState('');
  const [compania, setCompania] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: nombre,
      company: compania,
      email: email,
      message: mensaje
    };
    
    axios.post('https://conatct.fly.dev/api/v1/contact/contact/', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
        alert(error)
      });
    alert('enviado')
  }
  return (
    <div className="contactme-body" id='contacme'>
      <div className='box-contact'>
        <div className='box-contactme'>
          <div>
            <div>
              <i className="fa-regular fa-envelope fa-2x"></i>
              <p> franciscoaczayacatlg@gmail.com</p>
            </div>
            <div>
              <i className="fa-brands fa-linkedin fa-2x"></i>
              <p> https://www.linkedin.com/in/francisco-aczayacatl-garcia-gomez/</p>
            </div>
            <div>
              <i className="fa-brands fa-whatsapp fa-2x"></i>
              <p> 52 4521883957</p>
            </div>
            <div>
              <i className="fa-brands fa-github fa-2x"></i>
              <p> https://github.com/FranciscoAczayacatl</p>
            </div>
            <div>
              <i className="fa-brands fa-instagram fa-2x"></i>
              <p> https://www.instagram.com/francisco_aczy/</p>
            </div>
          </div>

        </div>
        <div className='box-form'>
          <h2>Contacto</h2>
          <form onSubmit={handleSubmit}>
            <label >
              <h4>Nombre:</h4>
              <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} required />
            </label>
            <br />
            <label>
              <h4>Compañia:</h4>
              <input type="text" value={compania} onChange={e => setCompania(e.target.value)}  required />
            </label>
            <br />
            <label>
              <h4>Email:</h4>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required  />
            </label>
            <br />
            <label>
              <h4>Mensaje:</h4>
              <textarea value={mensaje} onChange={e => setMensaje(e.target.value)} required />
            </label>
            <br />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;