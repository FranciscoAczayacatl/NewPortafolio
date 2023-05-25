import "../css/porfolio.css";
import CardEcommerceApi from "../components/cards/CardEcommerceApi";
import CardGameRPG from "../components/cards/CardGameRPG";
import CardTodoApi from "../components/cards/CardTodoApi";
import CardCoursesApi from "../components/cards/CardCoursesApi";
import CardJsonTodo from "../components/cards/CardJsonTodo";
import CardEcommerceReact from "../components/cards/CardEcommerceReact";
import CardPokedex from "../components/cards/CardPokedex";
import CardUsersApp from "../components/cards/CardUsersApp";
import CardRickAndMorty from "../components/cards/CardRickAndMorty";
import CardWeatherApp from "../components/cards/CardWeatherApp";
import CardQuotes from "../components/cards/CardQuotes";
import CardEcommerceVanilla from "../components/cards/CardEcommerceVanilla";
import CardBoxShadow from "../components/cards/CardBoxShadow";
import CardPortafolio from "../components/cards/CardPortafolio";
import { useState } from "react";

const Porfolio = ({en}) => {
 let [count, setcount] = useState(1);
 const addcount = () =>{
  if(count >= 14){
    setcount(count = 1)
    console.log(count);
  }else{
    setcount(count +=1);
    console.log(count);
  }
  
 }
 const resCount = () =>{
  if(count <= 1){
    setcount(count = 14)
    console.log(count);
  }else{
    setcount(count -=1);
    console.log(count);
  }

 }

 const cards = () =>{
  if (count == 1) {
    return (<CardGameRPG english={en}></CardGameRPG>)
  }
  else if(count==2){
    return (<CardEcommerceApi english={en}></CardEcommerceApi>)
  }
  else if(count==3){
    return (<CardTodoApi english={en}></CardTodoApi>)
  }
  else if(count == 4){
    return (<CardCoursesApi english={en}></CardCoursesApi>)
  } 
   else if(count == 5){
    return (<CardJsonTodo english={en}></CardJsonTodo>)
  }
  else if(count == 6){
    return (<CardEcommerceReact english={en}></CardEcommerceReact>)
  }
  else if(count == 7){
    return (<CardPokedex english={en}></CardPokedex>)
  }
  else if(count == 8){
    return (<CardUsersApp english={en}></CardUsersApp>)
  }
  else if(count == 9){
    return (<CardRickAndMorty english={en}></CardRickAndMorty>)
  }
  else if(count == 10){
    return (<CardWeatherApp english={en}></CardWeatherApp>)
  }
  else if(count == 11){
    return (<CardQuotes english={en}></CardQuotes>)
  }
  else if(count == 12){
    return (<CardEcommerceVanilla english={en}></CardEcommerceVanilla>)
  }
  else if(count == 13){
    return (<CardBoxShadow english={en}></CardBoxShadow>)
  }
  else if(count == 14){
    return (<CardPortafolio english={en}></CardPortafolio>)
  }
 }

  return (
    <div className="box-portafolio" id="main"> 
      {
        !en ? (
          <div className="text" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal"><h1>Proyectos Principales:</h1></div>
        ):(
          <div className="text" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal"><h1>Main projects:</h1></div>
        )
      }
        <div className="card-content">
          <div onClick={resCount}><i className="fa-solid fa-chevron-left fa-9x"></i></div>
              {
                cards()
              }
          <div onClick={addcount}><i className="fa-solid fa-chevron-right fa-9x"></i></div>
          <div className="seclections">
            <div onClick={()=>{setcount(count = 1)}} className="item-pag" style={count == 1 ? {backgroundColor:'rgba(165, 42, 42, 0.384)'}:{backgroundColor:'rgba(165, 42, 42, 0)'}}></div>
            <div onClick={()=>{setcount(count = 2)}} className="item-pag" style={count == 2 ? {backgroundColor:'rgba(165, 42, 42, 0.384)'}:{backgroundColor:'rgba(165, 42, 42, 0)'}}></div>
            <div onClick={()=>{setcount(count = 3)}} className="item-pag" style={count == 3 ? {backgroundColor:'rgba(165, 42, 42, 0.384)'}:{backgroundColor:'rgba(165, 42, 42, 0)'}}></div>
            <div onClick={()=>{setcount(count = 4)}} className="item-pag" style={count == 4 ? {backgroundColor:'rgba(165, 42, 42, 0.384)'}:{backgroundColor:'rgba(165, 42, 42, 0)'}}></div>
            <div onClick={()=>{setcount(count = 5)}} className="item-pag" style={count == 5 ? {backgroundColor:'rgba(165, 42, 42, 0.384)'}:{backgroundColor:'rgba(165, 42, 42, 0)'}}></div>
            <div onClick={()=>{setcount(count = 6)}} className="item-pag" style={count == 6 ? {backgroundColor:'rgba(165, 42, 42, 0.384)'}:{backgroundColor:'rgba(165, 42, 42, 0)'}}></div>
            <div onClick={()=>{setcount(count = 7)}} className="item-pag" style={count == 7 ? {backgroundColor:'rgba(165, 42, 42, 0.384)'}:{backgroundColor:'rgba(165, 42, 42, 0)'}}></div>
            <div onClick={()=>{setcount(count = 8)}} className="item-pag" style={count == 8 ? {backgroundColor:'rgba(165, 42, 42, 0.384)'}:{backgroundColor:'rgba(165, 42, 42, 0)'}}></div>
            <div onClick={()=>{setcount(count = 9)}} className="item-pag" style={count == 9 ? {backgroundColor:'rgba(165, 42, 42, 0.384)'}:{backgroundColor:'rgba(165, 42, 42, 0)'}}></div>
            <div onClick={()=>{setcount(count = 10)}} className="item-pag" style={count == 10 ? {backgroundColor:'rgba(165, 42, 42, 0.384)'}:{backgroundColor:'rgba(165, 42, 42, 0)'}}></div>
            <div onClick={()=>{setcount(count = 11)}} className="item-pag" style={count == 11 ? {backgroundColor:'rgba(165, 42, 42, 0.384)'}:{backgroundColor:'rgba(165, 42, 42, 0)'}}></div>
            <div onClick={()=>{setcount(count = 12)}} className="item-pag" style={count == 12 ? {backgroundColor:'rgba(165, 42, 42, 0.384)'}:{backgroundColor:'rgba(165, 42, 42, 0)'}}></div>
            <div onClick={()=>{setcount(count = 13)}} className="item-pag" style={count == 13 ? {backgroundColor:'rgba(165, 42, 42, 0.384)'}:{backgroundColor:'rgba(165, 42, 42, 0)'}}></div>
            <div onClick={()=>{setcount(count = 14)}} className="item-pag" style={count == 14 ? {backgroundColor:'rgba(165, 42, 42, 0.384)'}:{backgroundColor:'rgba(165, 42, 42, 0)'}}></div>
          </div>

        </div>
            

    </div>
  );
};

export default Porfolio;
