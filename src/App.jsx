import AboutMe from "./sections/AboutMe";
import ContactMe from "./sections/ContactMe";
import { isMobile } from "react-device-detect";
import Porfolio from "./sections/Porfolio";
import Skills from "./sections/Skills";
import Home from "./sections/Home";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "./css/app.css";
import { useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useState } from "react";
import reapir from './img/reparar'
// import ScrollTriggerProxy from "./components/ScrollTriggerProxy";

function App() {

  const [isEnglis, setIsEnglis] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalLeng, setModalLeng] = useState(false)

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };
  const modalClosed = () =>{
    setModalLeng(false)
  }

  const Eng = () => {
    setIsEnglis(true);
    setModalLeng(true)

  };

  const Esp = () => {
    setIsEnglis(false);
  };
  const settings = () => {
    return (
      <>
      
        <div className="controlls " onClick={handleModalOpen}>
          <i className="fa-solid fa-gear fa-2x"></i>
        </div>
        {isOpen && (
          <div className="prop">
            <div className="close" onClick={handleModalClose}>
              <i className="fa-solid fa-circle-xmark fa-xl"></i>
            </div>
            <img src="https://flagcdn.com/mx.svg" width="30" alt="México" onClick={Esp} />
            <img src="https://flagcdn.com/us.svg" width="30" alt="Estados Unidos" onClick={Eng}/>
          </div>
        )}
      </>
    );
  };

  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        {
        settings()
        }
        {modalLeng && (
                <div className="modal_lenguaje">
                <div className="modal-content">
                  <p>My current English level is A2, which means I have a basic understanding of the language. I can have simple conversations and comprehend basic information. However, I still need to improve my fluency and confidence in more complex areas. Despite my A2 level, I am committed to learning and improving my English. I am willing to take courses, practice with native speakers, and use online resources to strengthen my language skills.</p>
                  <button className="modales" onClick={modalClosed}>Closed</button>
                </div>
                
              </div>
        )}

      {
        !isMobile ?(
          <>
        <Home en={isEnglis}></Home>
        <AboutMe en={isEnglis}></AboutMe>
        <Skills en={isEnglis}></Skills>
        <Porfolio en={isEnglis}></Porfolio>
        <ContactMe en={isEnglis}></ContactMe>
          </>
        ):(<div style={{width:'100vw', height:'100vh', display:'flex',justifyContent:'center', alignItems:'center'}}><img src={reapir}></img></div>)
      }
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
