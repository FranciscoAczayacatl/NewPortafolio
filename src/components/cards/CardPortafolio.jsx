import { useState } from "react";
import webSVG from '../../img/web-SVG.svg'
import img from "../../img/Portafolio.png";
import svg from '../../img/img2.svg'

// eslint-disable-next-line react/prop-types
const CardPortafolio = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => {
    setShowModal(true);
  }

  const handleModalClose = () => {
    setShowModal(false);
  }
  const title = "Portafolio";
  const description = "Diseñé y maqueté un portafolio en línea con HTML y CSS, e implementé la técnica web responsive para asegurar que se visualizara correctamente en dispositivos móviles. Investigué las mejores prácticas de diseño y maquetación, creé una estructura clara y fácil de navegar, utilicé imágenes de alta calidad y garantizé la adaptación automática al tamaño de la pantalla del dispositivo. En resumen, estos aspectos son esenciales para una presencia digital efectiva y profesional.";

  return (
     <>
      <div className="card" style={{ backgroundImage: `url(${img})`, width:'20vw', height:'22vh' }}>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <button className="card-btn" onClick={handleModalOpen}>Ver más</button>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="modal-close" onClick={handleModalClose}>&times;</span>
            <img src={img} alt={title} className="modal-img" />
            <div className="curveado" style={{top: '154vw'}}><img src={svg}/></div>
            <h3 className="modal-title">{title}</h3>
            <p className="modal-text" style={{padding:'5px'}}>{description}</p>
            <div className="description-skills-and-links">
              <div>
                <h4>Tecnologias que se utilizaron:</h4>
                <div className="img-skills">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                </div>
              </div>
              <div >
                <h4>links:</h4>
                <div className="img-links">
                  <a href="https://portafolio-francisco-acz.netlify.app/" target="_blank" rel="noreferrer" ><img src={webSVG} alt="web" style={{width:'5vw', height:'15vh'}} /></a>
                  <a href="https://github.com/FranciscoAczayacatl/portafolio" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
 

    
  );
};

export default CardPortafolio;
