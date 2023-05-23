import video from '../video/Typing.mp4'
import Typing from "../components/Typing";
const CoverVideo = ({English}) => {
  return (
  <>
    {
      !English ? (
        <div className="video-container">
        <div className='overlay'>
        </div>
        <video data-scroll data-scroll-delay = '1' data-scroll-speed='1' src={video} type='video/mp4' autoPlay muted loop></video>
        <div className="presentation-box">
          <div style={{ display:'flex',textAlign:'center ', marginTop:'10vh'}} className="gretting" data-scroll data-scroll-delay = '0.13' data-scroll-speed='5'><p style={{fontSize:'7vw', fontFamily:'Merienda',}}>Hola &#128075;</p></div>
          <Typing ></Typing>
          <p  style={{padding:'0 25vh', margin:'0', fontSize:'2vw'}}></p>
          <div className='arror' data-scroll data-scroll-delay = '1' data-scroll-speed='5'>
        <i className="fa-solid fa-angles-down fa-bounce fa-9x" style={{color:"#ffffff", }}><p style={{fontSize:'2vw'}}>scroll</p></i>
        </div>
        </div>
      </div>
      ) : (
        <div className="video-container">
        <div className='overlay'>
        </div>
        <video data-scroll data-scroll-delay = '1' data-scroll-speed='1' src={video} type='video/mp4' autoPlay muted loop></video>
        <div className="presentation-box">
          <div style={{ display:'flex',textAlign:'center ', marginTop:'10vh'}} className="gretting" data-scroll data-scroll-delay = '0.13' data-scroll-speed='5'><p style={{fontSize:'7vw', fontFamily:'Merienda',}}>Hi&#128075;</p></div>
          <Typing English ={English}></Typing>
          <p  style={{padding:'0 25vh', margin:'0', fontSize:'2vw'}}></p>
          <div className='arror' data-scroll data-scroll-delay = '1' data-scroll-speed='5'>
        <i className="fa-solid fa-angles-down fa-bounce fa-9x" style={{color:"#ffffff", }}><p style={{fontSize:'2vw'}}>scroll</p></i>
        </div>
        </div>
      </div>
      )
    }
  </>
  )
}

export default CoverVideo