import CoverVideo from "../components/CoverVideo";

import '../css/home.css'



const Home = ({en}) => {
  return (
    <div className="home-box" id="home">
      
      <CoverVideo English ={en}></CoverVideo>
      
    </div>
  );
};

export default Home;