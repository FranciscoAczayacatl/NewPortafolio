import { useState } from "react";
import webSVG from '../../img/web-SVG.svg'
import img from '../../img/boxShadow.png'
import svg from '../../img/img2.svg'

const CardBoxShadow = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => {
    setShowModal(true);
  }

  const handleModalClose = () => {
    setShowModal(false);
  }
  const title = "Generador de box shadow ";
  const description = "Diseñé y desarrollé un generador de box shadow utilizando HTML, CSS y JavaScript. En este proyecto, pude profundizar en el manejo del DOM y los eventos en JavaScript para crear una experiencia de usuario interactiva y dinámica.";
  return (
    <>
      <div className="card" style={{ backgroundImage: `url(${img})` ,width:'20vw', height:'21vh' }}>
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
            <p className="modal-text">{description}</p>
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
                  <a href="https://generador-box-shadow.netlify.app/" target="_blank" rel="noreferrer" ><img src={webSVG} alt="web" style={{width:'5vw', height:'15vh'}} /></a>
                  <a href="https://github.com/FranciscoAczayacatl/generador-box-shadow" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardBoxShadow;