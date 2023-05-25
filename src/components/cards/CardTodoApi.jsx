
import img from '../../img/todoApi.png'


const CardTodoApi = ({english}) => {

  const title = "Todo API";
  const description = 'Desarrollé una API para una aplicación de lista de tareas pendientes, utilizando tecnologías como Express y Sequelize. También implementé paquetes como CORS para la gestión de permisos de acceso, y variables de entorno para garantizar la seguridad de las credenciales de la base de datos y otros detalles confidenciales. Para la autenticación de usuarios, utilicé jsonwebtoken para generar tokens de acceso seguro. Por último, utilicé postgreSQL como base de datos y maneje middlewares de autenticación para garantizar la protección de los datos del usuario y la seguridad de la aplicación.';
  const descriptionEn ='I developed an API for a Todo list application, using technologies like Express and Sequelize. I also implemented packages like CORS for access permission management, and environment variables to ensure the security of database credentials and other sensitive details. For user authentication, I used jsonwebtoken to generate secure access tokens. Finally, I utilized PostgreSQL as the database and implemented authentication middlewares to ensure user data protection and application security.';
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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" />
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
                 <a href="https://github.com/FranciscoAczayacatl/todoApi" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" />
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
                <a href="https://github.com/FranciscoAczayacatl/todoApi" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
              </a>
            </div>
          </div>
        </div>
      </div>
      )}
  </>

  );
};

export default CardTodoApi;