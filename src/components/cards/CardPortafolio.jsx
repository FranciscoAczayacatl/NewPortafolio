
import webSVG from '../../img/web-SVG.svg'
import img from "../../img/Portafolio.png";


// eslint-disable-next-line react/prop-types
const CardPortafolio = ({english}) => {

  const title = "Portafolio";
  const description = "Diseñé y maqueté un portafolio en línea con HTML y CSS, e implementé la técnica web responsive para asegurar que se visualizara correctamente en dispositivos móviles. Investigué las mejores prácticas de diseño y maquetación, creé una estructura clara y fácil de navegar, utilicé imágenes de alta calidad y garantizé la adaptación automática al tamaño de la pantalla del dispositivo. En resumen, estos aspectos son esenciales para una presencia digital efectiva y profesional.";
  const descriptionEn = "I designed and coded an online portfolio using HTML and CSS, and implemented responsive web techniques to ensure proper display on mobile devices. I researched best design and layout practices, created a clear and easy-to-navigate structure, used high-quality images, and ensured automatic adaptation to the device's screen size. In summary, these aspects are essential for an effective and professional digital presence."
  return (
     <>
      {!english ? (
        <div className="card-porfolio">
          <img src={img} alt={title} />
          <h3> {title}</h3>
          <p> {description}</p>
          <div className="tecnologies-and-links" >
            <div className='stileskills'>
              <h4>Tecnologias que se utilizaron: </h4>
              <div className="skills">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
              </div>
            </div>
            <div className="links">
              <h4>links:</h4>
              <div >
                <a
                  href="https://github.com/FranciscoAczayacatl/GameRPG"
                  target="_blank"
                  rel="noreferrer"
                >
<a href="https://portafolio-francisco-acz.netlify.app/" target="_blank" rel="noreferrer" ><img src={webSVG} alt="web" style={{width:'5vw', height:'15vh'}} /></a>
                  <a href="https://github.com/FranciscoAczayacatl/portafolio" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card-porfolio">
        <img src={img} alt={title} />
        <h3> box shadow</h3>
        <p> {descriptionEn}</p>
        <div className="tecnologies-and-links">
          <div className='stileskills'>
            <h4>Technologies that were used:</h4>
            <div className="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" /> 
            </div>
          </div>
          <div className="links">
            <h4>links:</h4>
            <div >
              <a
                href="https://github.com/FranciscoAczayacatl/GameRPG"
                target="_blank"
                rel="noreferrer"
              >
              <a href="https://portafolio-francisco-acz.netlify.app/" target="_blank" rel="noreferrer" ><img src={webSVG} alt="web" style={{width:'5vw', height:'15vh'}} /></a>
                  <a href="https://github.com/FranciscoAczayacatl/portafolio" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
              </a>
            </div>
          </div>
        </div>
      </div>
      )}

                
                  
                
    </>
 

    
  );
};

export default CardPortafolio;
