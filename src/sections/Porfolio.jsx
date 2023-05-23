
import "../css/porfolio.css";
import CardBoxShadow from "../components/cards/CardBoxShadow";
import CardCoursesApi from "../components/cards/CardCoursesApi";
import CardEcommerceApi from "../components/cards/CardEcommerceApi";
import CardEcommerceReact from "../components/cards/CardEcommerceReact";
import CardEcommerceVanilla from "../components/cards/CardEcommerceVanilla";
import CardGameRPG from "../components/cards/CardGameRPG";
import CardJsonTodo from "../components/cards/CardJsonTodo";
import CardPokedex from "../components/cards/CardPokedex";
import CardPortafolio from "../components/cards/CardPortafolio";
import CardQuotes from "../components/cards/CardQuotes";
import CardRickAndMorty from "../components/cards/CardRickAndMorty";
import CardTodoApi from "../components/cards/CardTodoApi";
import CardUsersApp from "../components/cards/CardUsersApp";
import CardWeatherApp from "../components/cards/CardWeatherApp";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { useLayoutEffect, useRef } from "react";

const Porfolio = () => {
  // gsap.registerPlugin(ScrollTrigger);
  // const ref = useRef(null);

  // const Horizontalref = useRef(null);

  // useLayoutEffect(() => {
  //   let element = ref.current;

  //   let scrollingElement = Horizontalref.current;

  //   let pinWrapWidth = scrollingElement.offsetWidth;
  //   let t1 = gsap.timeline();

  //   setTimeout(() => {
  //     t1.to(element, {
  //       scrollTrigger: {
  //         trigger: element,
  //         start: "top top",
  //         end: `${pinWrapWidth} bottom`,
  //         scroller: ".App-scroll-trigger", //locomotive-scroll
  //         scrub: 1,
  //         pin: true,
  //         // markers: true,
  //         // anticipatePin: 1,
  //       },
  //       height: `${scrollingElement.scrollWidth}px`,
  //       ease: "none",
  //     });

  //     t1.to(scrollingElement, {
  //       scrollTrigger: {
  //         trigger: scrollingElement,
  //         start: "top top",
  //         end: `${pinWrapWidth} bottom`,
  //         scroller: ".App-scroll-trigger", //locomotive-scroll
  //         scrub: 1,
  //         // markers: true,
  //       },
  //       x: -pinWrapWidth,

  //       ease: "none",
  //     });
  //     ScrollTrigger.refresh();
  //   }, 1000);
  //   ScrollTrigger.refresh();

  //   return () => {
  //     t1.kill();
  //     ScrollTrigger.kill();
  //   };
  // }, []);


  return (
    <div className="box" id="main"> {/**ref={ref} */}
      <div className="text" ><h1>Proyectos Principales</h1></div>
         <div className="container-items" data-scroll >  {/** ref={Horizontalref}*/}
            <div className="grid-item"><CardGameRPG></CardGameRPG></div>
            <div className="grid-item"><CardEcommerceApi></CardEcommerceApi></div>
            <div className="grid-item"><CardTodoApi></CardTodoApi></div>
            <div className="grid-item"><CardCoursesApi></CardCoursesApi></div>
            <div className="grid-item"><CardJsonTodo></CardJsonTodo></div>
            <div className="grid-item"><CardEcommerceReact></CardEcommerceReact></div>
            <div className="grid-item"><CardPokedex></CardPokedex></div>
            <div className="grid-item"><CardUsersApp></CardUsersApp></div>
            <div className="grid-item"><CardRickAndMorty></CardRickAndMorty></div>
            <div className="grid-item"><CardWeatherApp></CardWeatherApp></div>
            <div className="grid-item"><CardQuotes></CardQuotes></div>
            <div className="grid-item"><CardEcommerceVanilla></CardEcommerceVanilla></div>
            <div className="grid-item"><CardBoxShadow></CardBoxShadow></div>
            <div className="grid-item"><CardPortafolio></CardPortafolio></div>
         </div>
    </div>
  );
};

export default Porfolio;
