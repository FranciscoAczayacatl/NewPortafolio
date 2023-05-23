import { useState } from "react";
import img from '../../img/todoApi.png'
import svg from '../../img/img2.svg'

const CardTodoApi = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => {
    setShowModal(true);
  }

  const handleModalClose = () => {
    setShowModal(false);
  }
  const title = "Todo API";
  const description = 'Desarrollé una API para una aplicación de lista de tareas pendientes, utilizando tecnologías como Express y Sequelize. También implementé paquetes como CORS para la gestión de permisos de acceso, y variables de entorno para garantizar la seguridad de las credenciales de la base de datos y otros detalles confidenciales. Para la autenticación de usuarios, utilicé jsonwebtoken para generar tokens de acceso seguro. Por último, utilicé postgreSQL como base de datos y maneje middlewares de autenticación para garantizar la protección de los datos del usuario y la seguridad de la aplicación.';
  return (
<>
    <div className="card" style={{ backgroundImage: `url(${img})`,width:'20vw', height:'21vh'  }}>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <button className="card-btn" onClick={handleModalOpen}>Ver más</button>
      </div>
    </div>

    {showModal && (
      <div className="modal" style={{}}>
        <div className="modal-content" style={{}}>
          <span className="modal-close" onClick={handleModalClose}>&times;</span>
          <img src={img} alt={title} className="modal-img" />
          <div className="curveado" style={{top: '154vw'}}><img src={svg}/></div>
          <h3 className="modal-title">{title}</h3>
          <p className="modal-text" style={{padding:'0'}}>{description}</p>
          <div className="description-skills-and-links">
            <div>
              <h4>Tecnologias que se utilizaron:</h4>
              <div className="img-skills">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" />
              </div>
            </div>
            <div >
              <h4>links:</h4>
              <div className="img-links" style={{gap:'2vh'}}>
                <a href="https://github.com/FranciscoAczayacatl/todoApi" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

export default CardTodoApi;