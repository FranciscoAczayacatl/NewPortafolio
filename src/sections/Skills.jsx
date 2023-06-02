import '../css/skills.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Skills = ( {en}) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 0,
    centerMode: true,
    centerPadding: "200px",
    draggable:true,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {
        !en ? (
          <div className='box-skills-and-eduacation ' id='skills' >
          <div className="skill-box" data-scroll data-scroll-speed="-2" data-scroll-direction="vertical">
            <div className='cotainer-box-skills'>
              <div className='title'>
                <h1>Mis habilidades:</h1>
              </div>
              <div className='skills-img'>
                  <Slider {...settings}>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" style={{width:'10vw'}} />
                    </div>
                  </Slider>
              </div>
            
              
            </div>
          </div>
          <div className="education-box" data-scroll data-scroll-speed="1" data-scroll-direction="horizontal">
            <div className="container-box-education">
              <div className='title'><h1>Mi educación:</h1></div>
              <div className='box-academic'>
                <div className='first'>
                  <div className='title-academic'>
                    <h2>Academlo</h2>
                  </div>
                  <div className='date'>
                    <h5>graduado en febrero 2023</h5>
                  </div>
                </div>
                <div className='description-academic'>
                  <div className='academic-div'>
                    <h4>Curso de Desarrollo Web Full-Stack y Ciencias de la Computación</h4>
                    <a href="https://certificates.academlo.com/en/verify/59258428231222">https://certificates.academlo.com/en/verify/59258428231222</a>
                  </div>
                  <div className='academic-div'>
                    <h4>Back-End con Node.js</h4>
                    <a href="https://certificates.academlo.com/en/verify/57456725227388">https://certificates.academlo.com/en/verify/57456725227388</a>
                  </div>
                  <div className='academic-div'>
                    <h4>Desarrollo de aplicaciones web con react.js</h4>
                    <a href="https://certificates.academlo.com/en/verify/02894501130162">https://certificates.academlo.com/en/verify/02894501130162</a>
                  </div>
                  <div className='academic-div'>
                    <h4>Fundamentos de desarrollo web</h4>
                    <a href="https://certificates.academlo.com/en/verify/45283729714265">https://certificates.academlo.com/en/verify/02894501130162</a>
                  </div>
                </div>
              </div>
              <div className='box-academic'>
                <div className='first'>
                  <div className='title-academic'>
                    <h2>Instituto tecnológico superior de Uruapan </h2>
                  </div>
                  <div className='date'>
                    <h5>2016-2020</h5>
                  </div>
                </div>
                <div className='description-academic'>
                  <div className='academic-div'>
                    <h4>Ingeniería en sistemas computacionales (CARRERA TRUNCA)</h4>
                  </div>
                </div>
              </div>
              <div className='box-academic'>
                <div className='first'>
                  <div className='title-academic'>
                    <h2>Cetís 27 </h2>
                  </div>
                  <div className='date'>
                    <h5>2013-2016</h5>
                  </div>
                </div>
                <div className='description-academic'>
                  <div className='academic-div'>
                    <h4>Preparatoria con Bachillerato en técnico en programación</h4>
                  </div>
                </div>
              </div>
    
            </div>
            <div className='butons-cv'>
            <a href="https://drive.google.com/file/d/18tMH-gCe_aMuFBiNZy_EAULMkAYKnZW1/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button>CV Harvard</button></a>
            <a href="https://drive.google.com/file/d/1Y7Nb3ltF9XP-H6fAZ5UcgcfhDWfCSDzT/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button>CV Canva</button></a>
            </div>
          </div>
        </div>
        ): (
          <div className='box-skills-and-eduacation ' id='skills' >
          <div className="skill-box" data-scroll data-scroll-speed="-2" data-scroll-direction="vertical">
            <div className='cotainer-box-skills'>
              <div className='title'>
                <h1>My skills:</h1>
              </div>
              <div className='skills-img'>
                  <Slider {...settings}>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original-wordmark.svg" />
                    </div>
                    <div>
                      <img  src="https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" style={{width:'10vw'}} />
                    </div>
                  </Slider>
              </div>
            
              
            </div>
          </div>
          <div className="education-box" data-scroll data-scroll-speed="1" data-scroll-direction="horizontal">
            <div className="container-box-education">
              <div className='title'><h1>My studies:</h1></div>
              <div className='box-academic'>
                <div className='first'>
                  <div className='title-academic'>
                    <h2>Academlo</h2>
                  </div>
                  <div className='date'>
                    <h5>Graduated in February 2023</h5>
                  </div>
                </div>
                <div className='description-academic'>
                  <div className='academic-div'>
                    <h4>Full-Stack Web Development Course</h4>
                    <a href="https://certificates.academlo.com/en/verify/59258428231222">https://certificates.academlo.com/en/verify/59258428231222</a>
                  </div>
                  <div className='academic-div'>
                    <h4>Back-End with Node.js</h4>
                    <a href="https://certificates.academlo.com/en/verify/57456725227388">https://certificates.academlo.com/en/verify/57456725227388</a>
                  </div>
                  <div className='academic-div'>
                    <h4>Web Application Development with React.js</h4>
                    <a href="https://certificates.academlo.com/en/verify/02894501130162">https://certificates.academlo.com/en/verify/02894501130162</a>
                  </div>
                  <div className='academic-div'>
                    <h4>Fundamentals of Web Development</h4>
                    <a href="https://certificates.academlo.com/en/verify/45283729714265">https://certificates.academlo.com/en/verify/02894501130162</a>
                  </div>
                </div>
              </div>
              <div className='box-academic'>
                <div className='first'>
                  <div className='title-academic'>
                    <h2>Uruapan Higher Technological Institute</h2>
                  </div>
                  <div className='date'>
                    <h5>2016-2020</h5>
                  </div>
                </div>
                <div className='description-academic'>
                  <div className='academic-div'>
                    <h4>{"Bachelor's Degree in Computer Systems Engineering (incomplete)"}</h4>
                  </div>
                </div>
              </div>
              <div className='box-academic'>
                <div className='first'>
                  <div className='title-academic'>
                    <h2>Cetís 27 </h2>
                  </div>
                  <div className='date'>
                    <h5>2013-2016</h5>
                  </div>
                </div>
                <div className='description-academic'>
                  <div className='academic-div'>
                    <h4>{"High School with a Bachelor's Degree in Programming Technician"}</h4>
                  </div>
                </div>
              </div>
    
            </div>
            <div className='butons-cv'>
            <a href="https://drive.google.com/file/d/1jc42SBgN9dReURI8pz5D5BeKK4IUwzb3/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button>CV Harvard</button></a>
            <a href="https://drive.google.com/file/d/1aY4NXRSN4cx5J200J2w6XaLQKqAKRIKT/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button>CV Canva</button></a>
            </div>
          </div>
        </div>
        )
      }
    </>
  );
};

export default Skills;
