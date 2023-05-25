
import webSVG from '../../img/web-SVG.svg'
import img from '../../img/Ecommerce.png'


const CardEcommerceReact = ({english}) => {

  const title = "E-commerce en React.js ";
  const description = 'Desarrollé un E-Commerce en React que consumía una API. Utilicé Axios, UseEffect y UseState para manejar las solicitudes HTTP y React Hook Form para manejar los formularios. Implementé React Router Dom y parámetros de URL para permitir a los usuarios navegar por diferentes vistas y agregué rutas protegidas para restringir el acceso a ciertas páginas. Además, utilicé Redux para manejar el estado de la aplicación, lo que incluyó el uso de store, actions, reducer, useDispatch y useSelector para manejar la comunicación entre diferentes componentes. Implementé tokens y encabezados con Axios para manejar la autenticación y seguridad de la aplicación. También utilicé middlewares y UseContext para mejorar la estructura y eficiencia del código.';
  const descriptionEn ="I developed an E-Commerce website using React that consumed an API. I used Axios, useEffect, and useState to handle HTTP requests, and React Hook Form to handle form submission. I implemented React Router Dom and URL parameters to allow users to navigate through different views, and added protected routes to restrict access to certain pages. Additionally, I used Redux to manage the application state, which involved the use of store, actions, reducer, useDispatch, and useSelector to handle communication between different components. I implemented tokens and headers with Axios to handle authentication and application security. I also used middlewares and useContext to improve code structure and efficiency.";
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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /> 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
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
                 <a href="https://ecommerce-react-fagg.netlify.app/" target="_blank" rel="noreferrer" ><img src={webSVG} alt="web" style={{width:'5vw', height:'15vh'}} /></a>
                <a href="https://github.com/FranciscoAczayacatl/EcommerceReact" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card-porfolio">
        <img src={img} alt={title} />
        <h3> {title}</h3>
        <p> {descriptionEn}</p>
        <div className="tecnologies-and-links">
          <div className='stileskills'>
            <h4>Technologies that were used:</h4>
            <div className="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /> 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
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
                <a href="https://ecommerce-react-fagg.netlify.app/" target="_blank" rel="noreferrer" ><img src={webSVG} alt="web" style={{width:'5vw', height:'15vh'}} /></a>
                <a href="https://github.com/FranciscoAczayacatl/EcommerceReact" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
              </a>
            </div>
          </div>
        </div>
      </div>
      )}
                
             
                
              
  </>
  );
};

export default CardEcommerceReact;