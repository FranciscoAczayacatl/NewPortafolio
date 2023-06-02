import { useState } from 'react';
import '../css/nav.css';
import { motion } from 'framer-motion';
// import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Nav = ({English}) => {
  const [click, setClick] = useState(false)
  // const { scroll } = useLocomotiveScroll();

  // const handleScroll = (id) => {

  //   let elem = document.querySelector(id);
  //   // console.log(elem);
  //   setClick(!click);
  //   scroll.scrollTo(elem, {
  //     offset: '100',
  //     duration: '2000',
  //     easing: [0.25, 0.0, 0.35, 1.0],
  //   });
  // };
  return (
    
  <div>
      {
      !English ?  (
        <>
        <motion.div className="nav-box"
      initial={{
        y:'100%'
      }}
      animate={{
        y:'0'
      }}
      transition={{
        duration:1.5, delay:2
      }}
      >
        
        <motion className="menu-items" style={click == false ? {top:'-11vh'}: {top:'0'}}>
          <motion className='menu-btn' onClick={()=> setClick(!click)}>
            <p>menu</p>
          </motion>
         <a href="#home"><motion.li className="menuitem" whileHover={{scale:1.1, y:-5}} whileTap={{scale:0.09, y:0}} >Inicio</motion.li></a> 
          <a href="#about"><motion.li className="menuitem" whileHover={{scale:1.1, y:-5}} whileTap={{scale:0.09, y:0}} >Sobre mi</motion.li></a>
          <a href="#skills"><motion.li className="menuitem" whileHover={{scale:1.1, y:-5}} whileTap={{scale:0.09, y:0}} >Habilidades/estudios</motion.li></a>
          <a href="#main"><motion.li className="menuitem" whileHover={{scale:1.1, y:-5}} whileTap={{scale:0.09, y:0}} >Proyectos principales</motion.li></a>
          <a href="#contacme"><motion.li className="menuitem" whileHover={{scale:1.1, y:-5}} whileTap={{scale:0.09, y:0}} >Contactame</motion.li></a>
        </motion>
      </motion.div>
      <div className='sanwchi'>
        <div><i className="fa-solid fa-bars"></i></div>
      </div>
      </>
      ) : (
        <motion.div className="nav-box"
        initial={{
          y:'100%'
        }}
        animate={{
          y:'0'
        }}
        transition={{
          duration:1.5, delay:2
        }}
        >
          
          <motion className="menu-items" style={click == false ? {top:'-11vh'}: {top:'0'}}>
            <motion className='menu-btn' onClick={()=> setClick(!click)}>
              <p>menu</p>
            </motion>
            <a href="#home"><motion.li className="menuitem" whileHover={{scale:1.1, y:-5}} whileTap={{scale:0.09, y:0}} >Home</motion.li></a>
            <a href="#about"><motion.li className="menuitem" whileHover={{scale:1.1, y:-5}} whileTap={{scale:0.09, y:0}} >About me</motion.li></a>
            <a href="#skills"><motion.li className="menuitem" whileHover={{scale:1.1, y:-5}} whileTap={{scale:0.09, y:0}} >skills/studies</motion.li></a>
            <a href="#main"><motion.li className="menuitem" whileHover={{scale:1.1, y:-5}} whileTap={{scale:0.09, y:0}} >main projects</motion.li></a>
            <a href="#contacme"><motion.li className="menuitem" whileHover={{scale:1.1, y:-5}} whileTap={{scale:0.09, y:0}} >Contact me</motion.li></a>
            
            
            
            
            
          </motion>
        </motion.div>
      )
    }
  </div>
  );
};

export default Nav;