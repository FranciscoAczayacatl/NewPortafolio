import "../css/aboutme.css";
import foto from "../img/foto2.jpg";
import foto2 from "../img/foto.png";

const AboutMe = ({en}) => {
  return (
    <>
      {
        !en ? (
          <div className="aboutme-box about">
          <h1 data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">Sobre mí:</h1>
          <div className="descrition-aboutme" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
            
            
              <p >
                Soy un desarrollador Full Stack con experiencia en HTML, CSS,
                JavaScript, React.js, Node.js, Express, PostgreSQL y Python. Puedo
                construir aplicaciones web completas y escalables, incluyendo
                sistemas backend robustos y bases de datos. <br/>Soy una persona a la que
                le gusta reinventarse constantemente a sí mismo en busca de alcanzar
                un mejor rendimiento. Mi perfil está orientado al logro, la
                productividad, la resolución de problemas y el espíritu de
                aprendizaje constante.<br/> He encontrado una gran pasión por el
                desarrollo web y la implementación de aplicaciones que busquen
                suplir las necesidades sociales. Busco oportunidades que me permitan
                aprender cada día a través de retos, trabajar en equipo e
                implementar mis conocimientos para el bien común.
              </p>
              <a href="https://www.linkedin.com/in/francisco-aczayacatl-garcia-gomez" target="_blank" rel="noopener noreferrer"><button style={{width:'15vw', height:'7vh', fontSize:'2vw'}}><i className="fa-brands fa-linkedin" ></i> conectemos</button></a>
          </div>
          <div className="foto-about">
            <img src={foto} alt="" />
          </div>
          <div className="photo-presentation" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
            <div className="photo-container">
              <img src={foto2} alt="" />
            </div>
          </div>
        </div>
        ) : (
          <div className="aboutme-box about">
          <h1 data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">about me:</h1>
          <div className="descrition-aboutme" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
            
            
              <p>
              I am a Full Stack developer with experience in HTML, CSS, JavaScript, React.js, Node.js, Express, PostgreSQL, and Python. I can build complete and scalable web applications, including robust backend systems and databases. <br/>I am someone who constantly likes to reinvent myself in search of achieving better performance. My profile is achievement-oriented, productive, problem-solving, and embodies a spirit of continuous learning.<br/>I have found a great passion for web development and implementing applications that aim to fulfill social needs. I am seeking opportunities that allow me to learn every day through challenges, work as a team, and apply my knowledge for the common good.
              </p>
              <a href="https://www.linkedin.com/in/francisco-aczayacatl-garcia-gomez" target="_blank" rel="noopener noreferrer"><button style={{width:'15vw', height:'7vh', fontSize:'2vw'}}><i className="fa-brands fa-linkedin" ></i> {"let's connect"}</button></a>
          </div>
          <div className="foto-about">
            <img src={foto} alt="" />
          </div>
          <div className="photo-presentation" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
            <div className="photo-container">
              <img src={foto2} alt="" />
            </div>
          </div>
        </div>
        )
      }
    </>
  );
};

export default AboutMe;
