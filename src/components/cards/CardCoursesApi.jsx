import { useState } from "react";
import img from '../../img/courseApi.png'
import svg from '../../img/img2.svg'

const CardCoursesApi = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => {
    setShowModal(true);
  }

  const handleModalClose = () => {
    setShowModal(false);
  }
  const title = "Courses API  ";
  const description = 'Desarrollé una API para una plataforma de cursos en línea. Para construir la API, utilicé Express y una base de datos PostgreSQL. Para interactuar con la base de datos desde el servidor, implementé la dependencia Sequelize. También utilicé una estructura de manejo de carpetas para organizar y mejorar la funcionalidad del servidor. Con esto, pude crear una API escalable y eficiente para manejar la información de los cursos y los usuarios de la plataforma.';
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
          <p className="modal-text" style={{padding:'3px'}}>{description}</p>
          <div className="description-skills-and-links">
            <div>
              <h4>Tecnologias que se utilizaron:</h4>
              <div className="img-skills">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
                
              </div>
            </div>
            <div >
              <h4>links:</h4>
              <div className="img-links" style={{gap:'2vh'}}>
                <a href="https://github.com/FranciscoAczayacatl/courseApi" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

export default CardCoursesApi;
