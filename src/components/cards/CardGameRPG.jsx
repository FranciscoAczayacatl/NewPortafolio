import { useState } from "react";
import img from '../../img/GameRPG.png'
import svg from '../../img/img2.svg'
const CardGameRPG = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => {
    setShowModal(true);
  }

  const handleModalClose = () => {
    setShowModal(false);
  }
  const title = "Game RPG";
  const description = 'Este proyecto aprendí un lenguaje de programación el cual fue python desde cero la cual se utilizaron tanto conceptos muy básicos como variables, operadores, sentencias de control, ciclos, colecciones de datos, funciones. hasta temas un poco más avanzados como programación orientada a objetos, excepciones , manejo de archivos, entornos virtuales la cual utilice la librería pytest para hacer pruebas. al finalizar de aprender todo esto hice un proyecto de un juego tipo rpg la cual no tiene sistema gráfico pero para su utilización lee un archivo tipo json la cual interpretar los movimientos y habilidades';
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
          <p className="modal-text" style={{padding:'1px'}}>{description}</p>
          <div className="description-skills-and-links">
            <div>
              <h4>Tecnologias que se utilizaron:</h4>
              <div className="img-skills">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
              </div>
            </div>
            <div >
              <h4>links:</h4>
              <div className="img-links" style={{gap:'2vh'}}>
                <a href="https://github.com/FranciscoAczayacatl/GameRPG" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

export default CardGameRPG;