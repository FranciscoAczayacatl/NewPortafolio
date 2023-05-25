
import webSVG from '../../img/web-SVG.svg'
import  img from '../../img/weatherApp.png'


const CardWeatherApp = ({english}) => {

  const title = "weather-app React ";
  const description = 'En mi proyecto, gestioné los ciclos de vida de React para una aplicación relacionada con el clima. Utilicé useEffect para controlar el comportamiento de los componentes. Para obtener datos del clima, utilicé Axios y consumí el API Open Weather. También implementé la geolocalización del usuario utilizando la función getCurrentPosition de JavaScript.En resumen, manejé los ciclos de vida de React, usé Axios para consumir el API de Open Weather y utilicé getCurrentPosition para la geolocalización del usuario.'
  const descriptionEn = "In my project, I handled the lifecycle methods of React for a weather-related application. I used useEffect to control the behavior of the components. To fetch weather data, I used Axios and consumed the Open Weather API. Additionally, I implemented user geolocation using the getCurrentPosition function in JavaScript. In summary, I managed React's lifecycle methods, utilized Axios to consume the Open Weather API, and employed getCurrentPosition for user geolocation."
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
                  <a href="https://weather-app-fagg.netlify.app/" target="_blank" rel="noreferrer" ><img src={webSVG} alt="web" style={{width:'5vw', height:'15vh'}} /></a>
                  <a href="https://github.com/FranciscoAczayacatl/Weather" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
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
                 <a href="https://weather-app-fagg.netlify.app/" target="_blank" rel="noreferrer" ><img src={webSVG} alt="web" style={{width:'5vw', height:'15vh'}} /></a>
                <a href="https://github.com/FranciscoAczayacatl/Weather" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
              </a>
            </div>
          </div>
        </div>
      </div>
      )}
 
             
                
              
  </>
  );
};

export default CardWeatherApp;