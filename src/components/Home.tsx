import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

interface HomeProps {
  id: string; // Explicitly define the id prop
}

const Home: React.FC<HomeProps> = ({ id }) => {
  return (
    <div id={id} className="home-wrapper">
      {" "}
      {/* Apply the id prop here */}
      <div className="home">
        <Fade direction="down">
          <div className="texts">
            <span className="main-title">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("hey,")
                    .pauseFor(500)
                    .typeString(" i'm <strong style='color: #ff5f00'>sarwar</strong>!")
                    .start();
                }}
              />
            </span>
            <span className="subtitle">I like to build things.</span>
            <span className="main-description">
              Software Engineer and Computer Science student. Passionate about technology since my childhood, made my
              hobby my job. I'm always trying to learn something new.
            </span>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
