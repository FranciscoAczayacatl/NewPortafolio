
import img from '../../img/JSON-API-ToDo.png'


const CardJsonTodo = ({english}) => {

  const title = "Json API Todo";
  const description = 'Trabajé en una aplicación para una lista de tareas pendientes, donde desarrollé una API JSON para manejar las solicitudes HTTP. Utilicé la tecnología Node.js con Express para construir la API. Para hacer la aplicación, implementé un CRUD que incluyó las funciones de get, post, put y delete. Manejé los datos de la aplicación a través de un archivo JSON donde se almacenaban los Todos. Además, utilicé rutas para manejar la navegación entre las diferentes vistas de la aplicación.';
  const descriptionEn = "I worked on an application for a Todo list where I developed a JSON API to handle HTTP requests. I used Node.js with Express technology to build the API. For the application, I implemented a CRUD (Create, Read, Update, Delete) functionality that included the GET, POST, PUT, and DELETE functions. I managed the application data through a JSON file where the Todos were stored. Additionally, I used routes to handle navigation between different views of the application.";
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
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
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
                  <a href="https://github.com/FranciscoAczayacatl/JSON-API-ToDo" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  /></a>
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
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
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
                <a href="https://github.com/FranciscoAczayacatl/JSON-API-ToDo" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  /></a>
              </a>
            </div>
          </div>
        </div>
      </div>
      )}
               


                

  </>
  );
};

export default CardJsonTodo;