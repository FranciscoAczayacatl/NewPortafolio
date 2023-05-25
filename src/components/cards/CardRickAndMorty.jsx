
import webSVG from '../../img/web-SVG.svg'
import img from '../../img/Rick-and-Morty.png'


const CardRickAndMorty = ({english}) => {

  const title = "RickAndMorty-app React ";
  const description = 'Desarrollé una aplicación en React utilizando el API de Rick and Morty. Usé axios para obtener los datos y UseEffect para manejar los efectos secundarios. También implementé el renderizado condicional, usé listas y keys para organizar los datos y inputs controlados para manejar la entrada del usuario';
  const descriptionEn = "I developed a React application using the Rick and Morty API. I used axios to fetch the data and useEffect to handle side effects. I also implemented conditional rendering, used lists and keys to organize the data, and controlled inputs to handle user input."
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
<a href="https://rick-and-morty-api-fagg.netlify.app/" target="_blank" rel="noreferrer" ><img src={webSVG} alt="web" style={{width:'5vw', height:'15vh'}} /></a>
                <a href="https://github.com/FranciscoAczayacatl/RickandMortyApi" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
                
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
                 <a href="https://rick-and-morty-api-fagg.netlify.app/" target="_blank" rel="noreferrer" ><img src={webSVG} alt="web" style={{width:'5vw', height:'15vh'}} /></a>
                <a href="https://github.com/FranciscoAczayacatl/RickandMortyApi" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
              </a>
            </div>
          </div>
        </div>
      </div>
      )}
                
            
                
             
  
  </>
  );
};

export default CardRickAndMorty;