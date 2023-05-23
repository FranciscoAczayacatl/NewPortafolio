import { useState } from 'react';
import '../css/nav.css';
import { motion } from 'framer-motion';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Nav = ({English}) => {
  const [click, setClick] = useState(false)
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {

    let elem = document.querySelector(id);
    // console.log(elem);
    setClick(!click);
    scroll.scrollTo(elem, {
      offset: '100',
      duration: '2000',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };
  return (
    
  <div>
      {
      !English ?  (
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
          <motion.li className="menuitem" whileHover={{scale:1.1, y:-5}} whileTap={{scale:0.09, y:0}} onClick={() => handleScroll('#home')}>Inicio</motion.li>
          <motion.li className="menuitem" whileHover={{scale:1.1, y:-5}} whileTap={{scale:0.09, y:0}} onClick={() => handleScroll('.about')}>Sobre mi</motion.li>
          <motion.li className="menuitem" whileHover={{scale:1.1, y:-5}} whileTap={{scale:0.09, y:0}} onClick={() => handleScroll('#skills')}>Habilidades/estudios</motion.li>
          <motion.li className="menuitem" whileHover={{scale:1.1, y:-5}} whileTap={{scale:0.09, y:0}} onClick={() => handleScroll('#main')}>Proyectos principales</motion.li>
          <motion.li className="menuitem" whileHover={{scale:1.1, y:-5}} whileTap={{scale:0.09, y:0}} onClick={() => handleScroll('#contacme')}>Contactame</motion.li>
        </motion>
      </motion.div>
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
            <motion.li className="menuitem" whileHover={{scale:1.1, y:-5}} whileTap={{scale:0.09, y:0}} onClick={() => handleScroll('#home')}>Home</motion.li>
            <motion.li className="menuitem" whileHover={{scale:1.1, y:-5}} whileTap={{scale:0.09, y:0}} onClick={() => handleScroll('.about')}>About me</motion.li>
            <motion.li className="menuitem" whileHover={{scale:1.1, y:-5}} whileTap={{scale:0.09, y:0}} onClick={() => handleScroll('#skills')}>skills/studies</motion.li>
            <motion.li className="menuitem" whileHover={{scale:1.1, y:-5}} whileTap={{scale:0.09, y:0}} onClick={() => handleScroll('#main')}>main projects</motion.li>
            <motion.li className="menuitem" whileHover={{scale:1.1, y:-5}} whileTap={{scale:0.09, y:0}} onClick={() => handleScroll('#contacme')}>Contact me</motion.li>
          </motion>
        </motion.div>
      )
    }
  </div>
  );
};

export default Nav;