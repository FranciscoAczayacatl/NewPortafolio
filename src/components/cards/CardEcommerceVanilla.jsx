
import { useState } from "react";
import svg from '../../img/img2.svg'
import webSVG from '../../img/web-SVG.svg'
import  img from '../../img/EcommerceVanilla.png'
// https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg

const CardEcommerceVanilla = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => {
    setShowModal(true);
  }

  const handleModalClose = () => {
    setShowModal(false);
  }
  const title = "E-commerce en vanilla JavaScript ";
  const description = "Desarrollé y maqueté un e-commerce utilizando HTML, CSS y vanilla JavaScript. Para asegurarme de que la página web tuviera una buena experiencia de usuario, diseñé una interfaz web responsive. Esto significa que la página se adapta automáticamente al tamaño de la pantalla del dispositivo, ya sea un ordenador, una tableta o un teléfono móvil. De esta manera, los usuarios pueden navegar y comprar en la tienda en línea desde cualquier dispositivo de forma cómoda y sin problemas.";
  return (
    <>
    <div className="card" style={{ backgroundImage: `url(${img})`,width:'20vw', height:'21vh' }}>
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
          <p className="modal-text" style={{padding:'1px'}}>{description}</p>
          <div className="description-skills-and-links">
            <div>
              <h4>Tecnologias que se utilizaron:</h4>
              <div className="img-skills">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              </div>
            </div>
            <div >
              <h4>links:</h4>
              <div className="img-links">
                <a href="https://ecommerce-fagg.netlify.app/" target="_blank" rel="noreferrer" ><img src={webSVG} alt="web" style={{width:'5vw', height:'15vh'}} /></a>
                <a href="https://github.com/FranciscoAczayacatl/Ecommerce" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

export default CardEcommerceVanilla;