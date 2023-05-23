import { useState } from "react";
import webSVG from '../../img/web-SVG.svg'
import img from '../../img/Ecommerce.png'
import svg from '../../img/img2.svg'

const CardEcommerceReact = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => {
    setShowModal(true);
  }

  const handleModalClose = () => {
    setShowModal(false);
  }
  const title = "E-commerce en React.js ";
  const description = 'Desarrollé un E-Commerce en React que consumía una API. Utilicé Axios, UseEffect y UseState para manejar las solicitudes HTTP y React Hook Form para manejar los formularios. Implementé React Router Dom y parámetros de URL para permitir a los usuarios navegar por diferentes vistas y agregué rutas protegidas para restringir el acceso a ciertas páginas. Además, utilicé Redux para manejar el estado de la aplicación, lo que incluyó el uso de store, actions, reducer, useDispatch y useSelector para manejar la comunicación entre diferentes componentes. Implementé tokens y encabezados con Axios para manejar la autenticación y seguridad de la aplicación. También utilicé middlewares y UseContext para mejorar la estructura y eficiencia del código.';
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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /> 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
              </div>
            </div>
            <div >
              <h4>links:</h4>
              <div className="img-links" style={{gap:'2vh'}}>
                <a href="https://ecommerce-react-fagg.netlify.app/" target="_blank" rel="noreferrer" ><img src={webSVG} alt="web" style={{width:'5vw', height:'15vh'}} /></a>
                <a href="https://github.com/FranciscoAczayacatl/EcommerceReact" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

export default CardEcommerceReact;