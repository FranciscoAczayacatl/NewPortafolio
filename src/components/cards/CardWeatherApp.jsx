import { useState } from "react";
import webSVG from '../../img/web-SVG.svg'
import  img from '../../img/weatherApp.png'
import svg from '../../img/img2.svg'

const CardWeatherApp = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => {
    setShowModal(true);
  }

  const handleModalClose = () => {
    setShowModal(false);
  }
  const title = "weather-app React ";
  const description = 'En mi proyecto, gestioné los ciclos de vida de React para una aplicación relacionada con el clima. Utilicé useEffect para controlar el comportamiento de los componentes. Para obtener datos del clima, utilicé Axios y consumí el API Open Weather. También implementé la geolocalización del usuario utilizando la función getCurrentPosition de JavaScript.En resumen, manejé los ciclos de vida de React, usé Axios para consumir el API de Open Weather y utilicé getCurrentPosition para la geolocalización del usuario.'
  return (
    <>
    <div className="card" style={{ backgroundImage: `url(${img})`,width:'20vw', height:'21vh'  }}>
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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /> 
              </div>
            </div>
            <div >
              <h4>links:</h4>
              <div className="img-links">
                <a href="https://weather-app-fagg.netlify.app/" target="_blank" rel="noreferrer" ><img src={webSVG} alt="web" style={{width:'5vw', height:'15vh'}} /></a>
                <a href="https://github.com/FranciscoAczayacatl/Weather" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

export default CardWeatherApp;