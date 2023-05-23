import CoverVideo from "../components/CoverVideo";
import Nav from './Nav'
import '../css/home.css'



const Home = ({en}) => {
  return (
    <div className="home-box" id="home">
      <Nav English ={en}></Nav>
      <CoverVideo English ={en}></CoverVideo>
      
    </div>
  );
};

export default Home;