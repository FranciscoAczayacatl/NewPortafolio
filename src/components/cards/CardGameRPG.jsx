import img from "../../img/GameRPG.png";

const CardGameRPG = ({ english }) => {
  const title = "Game RPG";
  const description = "Este proyecto aprendí un lenguaje de programación el cual fue python desde cero la cual se utilizaron tanto conceptos muy básicos como variables, operadores, sentencias de control, ciclos, colecciones de datos, funciones. hasta temas un poco más avanzados como programación orientada a objetos, excepciones , manejo de archivos, entornos virtuales la cual utilice la librería pytest para hacer pruebas. al finalizar de aprender todo esto hice un proyecto de un juego tipo rpg la cual no tiene sistema gráfico pero para su utilización lee un archivo tipo json la cual interpretar los movimientos y habilidades";
  const descriptionEn = "I learned a programming language, Python, from scratch for this project. I covered basic concepts such as variables, operators, control statements, loops, data collections, and functions. I also delved into more advanced topics like object-oriented programming, exceptions, file handling, and virtual environments. I utilized the pytest library for testing purposes. Upon completing the learning phase, I worked on a text-based RPG game project. Although it lacks a graphical interface, it reads a JSON file to interpret movements and abilities for gameplay";
  return (
    <>
      {!english ? (
        <div className="card-porfolio">
          <img src={img} alt={title} />
          <h3> {title}</h3>
          <p> {description}</p>
          <div className="tecnologies-and-links">
            <div>
              <h4>Tecnologias que se utilizaron: </h4>
              <div className="skills">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
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
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
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
          <div>
            <h4>Technologies that were used:</h4>
            <div className="skills">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default CardGameRPG;
