import { useState } from "react";
import img from '../../img/Swagger-UI.png'
import svg from '../../img/img2.svg'
import webSVG from '../../img/web-SVG.svg'

const CardEcommerceApi = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => {
    setShowModal(true);
  }

  const handleModalClose = () => {
    setShowModal(false);
  }
  const title = "Ecommerce API";
  const description = 'Trabajé en la creación de una API para un Ecommerce utilizando Express y Node.js como tecnologías principales. Para garantizar la seguridad de las contraseñas de los usuarios, implementé la dependencia de npm bcrypt para su encriptado. También manejé variables de entorno para proteger información sensible, y utilicé jsonwebtoken para la generación de tokens de usuario y la autenticación. Además, para mejorar la experiencia de usuario, implementé Nodemailer para el envío de correos electrónicos a los usuarios, incluyendo mensajes de creación de cuenta y confirmación de compra. Finalmente, para documentar los endpoints, utilicé Swagger, y como base de datos, utilicé PostgreSQL.';
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
        <div className="modal-content" style={{height:'100vh'}}>
          <span className="modal-close" onClick={handleModalClose}>&times;</span>
          <img src={img} alt={title} className="modal-img" />
          <div className="curveado" style={{top: '153vw'}}><img src={svg}/></div>
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
                <img src="https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" alt="" />
              </div>
            </div>
            <div >
              <h4>links:</h4>
              <div className="img-links" style={{gap:'2vh'}}>
                <a href="https://ecommerceapi-fagg.up.railway.app/api/v1/docs/" target="_blank" rel="noreferrer" ><img src={webSVG} alt="web" style={{width:'5vw', height:'15vh'}} /></a>
                <a href="https://github.com/FranciscoAczayacatl/EcommerceApi" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

export default CardEcommerceApi;