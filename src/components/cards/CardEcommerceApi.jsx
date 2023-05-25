import img from '../../img/Swagger-UI.png'
import webSVG from '../../img/web-SVG.svg'

const CardEcommerceApi = ({ english }) => {
  
  const title = "Ecommerce API";
  const description = 'Trabajé en la creación de una API para un Ecommerce utilizando Express y Node.js como tecnologías principales. Para garantizar la seguridad de las contraseñas de los usuarios, implementé la dependencia de npm bcrypt para su encriptado. También manejé variables de entorno para proteger información sensible, y utilicé jsonwebtoken para la generación de tokens de usuario y la autenticación. Además, para mejorar la experiencia de usuario, implementé Nodemailer para el envío de correos electrónicos a los usuarios, incluyendo mensajes de creación de cuenta y confirmación de compra. Finalmente, para documentar los endpoints, utilicé Swagger, y como base de datos, utilicé PostgreSQL.';
  const descriptionEn ='I worked on creating an API for an Ecommerce platform using Express and Node.js as the main technologies. To ensure the security of user passwords, I implemented the bcrypt npm dependency for encryption. I also handled environment variables to protect sensitive information and used jsonwebtoken for user token generation and authentication. Additionally, to enhance the user experience, I implemented Nodemailer for sending emails to users, including account creation messages and purchase confirmation emails. Lastly, I used Swagger for documenting the endpoints, and PostgreSQL as the database';
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
                <img src="https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" alt="" /> 
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
                  <a href="https://ecommerceapi-fagg.up.railway.app/api/v1/docs/" target="_blank" rel="noreferrer" ><img src={webSVG} alt="web" style={{width:'5vw', height:'15vh'}} /></a>
                <a href="https://github.com/FranciscoAczayacatl/EcommerceApi" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
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
                <img src="https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" alt="" /> 
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
                <a href="https://ecommerceapi-fagg.up.railway.app/api/v1/docs/" target="_blank" rel="noreferrer" ><img src={webSVG} alt="web" style={{width:'5vw', height:'15vh'}} /></a>
                <a href="https://github.com/FranciscoAczayacatl/EcommerceApi" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  style={{width:'5vw', height:'15vh'}}/></a>
              </a>
            </div>
          </div>
        </div>
      </div>
      )}
  </>
  );
};

export default CardEcommerceApi;