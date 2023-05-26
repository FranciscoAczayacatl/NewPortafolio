import { TypeAnimation } from "react-type-animation";
import "../css/typing.css";

const Typing = ({ English }) => {
  return (
    <>
      {!English ? (
        <div className = 'div-box-home-typing'>
          <div>
            <span className="name-home">
              <p
                
                data-scroll
                data-scroll-delay="1"
                data-scroll-speed="5"
              >
                Mi nombre es:{" "}
              </p>
              <div data-scroll data-scroll-delay="1" data-scroll-speed="5">
                <TypeAnimation
                  sequence={[1500, "Francisco Aczayacatl García Gómez"]}
                  repeat={Infinity}
                  style={{ fontFamily: "Josefin Slab" }}
                />
              </div>
            </span>
          </div>
          <p
            data-scroll
            data-scroll-delay="1"
            data-scroll-speed="5"
            style={{ fontSize: "2vw", color: "white" }}
          >
            y soy:
          </p>
          <div>
            <span className="profession">
              <div data-scroll data-scroll-delay="1" data-scroll-speed="5">
                <TypeAnimation
                  style={{ margin: "0" }}
                  sequence={[1500, "Fullstack Developer"]}
                  repeat={Infinity}
                />
              </div>
            </span>
          </div>
        </div>
      ) : (
        <div style={{ marginBottom: "15vh" }}>
          <div>
            <span className="name-home">
              <p
                style={{ margin: "0" }}
                data-scroll
                data-scroll-delay="1"
                data-scroll-speed="5"
              >
                My name is:{" "}
              </p>{" "}
              <div data-scroll data-scroll-delay="1" data-scroll-speed="5">
                <TypeAnimation
                  sequence={[1500, "Francisco Aczayacatl García Gómez"]}
                  repeat={Infinity}
                  style={{ fontFamily: "Josefin Slab" }}
                />
              </div>
            </span>
          </div>
          <p
            data-scroll
            data-scroll-delay="1"
            data-scroll-speed="5"
            style={{ fontSize: "2vw", color: "white" }}
          >
            {"I'm:"}
          </p>
          <div>
            <span className="profession">
              <div data-scroll data-scroll-delay="1" data-scroll-speed="5">
                <TypeAnimation
                  style={{ margin: "0" }}
                  sequence={[1500, "Fullstack Developer"]}
                  repeat={Infinity}
                />
              </div>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Typing;
