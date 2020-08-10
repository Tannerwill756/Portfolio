import React, { useState } from "react";
import styled from "styled-components";

import styles from "./HoverFx.module.scss";
import { useInView } from "react-intersection-observer";

import BGImg from "../images/debut_light.png";
import expatPic from "../images/expat.PNG";
import coMake from "../images/coMake.PNG";
import randChamp from "../images/randChamp.PNG";

function Projects(props) {
  const [trainingBot, setTrainingBot] = useState(false);
  const [tipEase, setTipEase] = useState(false);
  const [doorman, setDoorman] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <PortfolioWrapper>
      <h2 ref={ref} className={inView ? styles.fadeInText : styles.fadeOutText}>
        Recent Projects
      </h2>
      <hr style={{ marginBottom: "60px" }} />

      <Project style={{ backgroundImage: `url(${coMake})` }}>
        <HoverProject
          onMouseEnter={(e) => setTrainingBot(true)}
          onMouseLeave={(e) => setTrainingBot(false)}
          className={trainingBot ? styles.popoverHover : styles.popoverHoverOut}
        >
          <p>Check it out!</p>
          <div>
            <button
              onClick={(e) =>
                window.open(
                  "https://github.com/lambda-comake/back-end",
                  "_blank"
                )
              }
            >
              github
            </button>
            <button
              onClick={(e) =>
                window.open("https://co-make-fe.vercel.app/", "_blank")
              }
            >
              live site
            </button>
          </div>
        </HoverProject>
        <ProjectCover>
          <div>
            <h3>Co-Make</h3>
            <p>
              An application that helps spread awareness of issues in your
              community for your local government to see and prioritize.
            </p>
          </div>
        </ProjectCover>
      </Project>
      <ProjectDiscription>
        <p>
          Co-Make was a project orginally planned to be built during one week, I
          was the back-end developer and another student was the front-end
          developer. Due to personal issues the front-end devolper never
          finished his portion so in my free time I decided to build the
          front-end from scratch and this is what you see here. Technologies
          used: React/Redux, Node.js/Express, and PostgreSQL.
        </p>
        <MobileLinks>
          <p>
            github:{" "}
            <a
              href="https://github.com/Tannerwill756/front-end"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Tannerwill756/front-end
            </a>
          </p>
          <p>
            live site:{" "}
            <a
              href="https://github.com/Tannerwill756/front-end"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://expat-journal-bw.vercel.app/
            </a>
          </p>
        </MobileLinks>
      </ProjectDiscription>

      <Project style={{ backgroundImage: `url(${expatPic})` }}>
        <HoverProject
          onMouseEnter={(e) => setTipEase(true)}
          onMouseLeave={(e) => setTipEase(false)}
          className={tipEase ? styles.popoverHover : styles.popoverHoverOut}
        >
          <p>Check it out!</p>
          <div>
            <button
              onClick={(e) =>
                window.open(
                  "https://github.com/Tannerwill756/front-end",
                  "_blank"
                )
              }
            >
              github
            </button>
            <button
              onClick={(e) =>
                window.open("https://expat-journal-bw.vercel.app/", "_blank")
              }
            >
              live site
            </button>
          </div>
        </HoverProject>
        <ProjectCover>
          <div>
            <h3>Expat Journal</h3>
            <p>
              An application that utilizes Redux for the front end and Node JS
              for the backend to allow users to see others posts and post about
              journey's they are on.
            </p>
          </div>
        </ProjectCover>
      </Project>
      <ProjectDiscription>
        <p>
          Expat Journal was initially built in 1 week with a group of 5 students
          from Lambda School, all at different portions in the school. My roll
          was the lead Front End developer, working with 2 others Front End
          students as well as constant communication with the Back End team. We
          reached our goals for the week and were super happy with how it turned
          out. As I wanted to show off this project on my portfolio website, I
          cloned the project and continued working on it in my free time.
          Technologies used include: React/Redux, Node.js/Express, and
          PostgreSQL. I assisted in the entire stack by implementing features on
          both the front and back end.
        </p>
        <MobileLinks>
          <p>
            github:{" "}
            <a
              href="https://github.com/Tannerwill756/front-end"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Tannerwill756/front-end
            </a>
          </p>
          <p>
            live site:{" "}
            <a
              href="https://expat-journal-bw.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://expat-journal-bw.vercel.app/
            </a>
          </p>
        </MobileLinks>
      </ProjectDiscription>
      {/* new proj */}
      <Project style={{ backgroundImage: `url(${randChamp})` }}>
        <HoverProject
          onMouseEnter={(e) => setDoorman(true)}
          onMouseLeave={(e) => setDoorman(false)}
          className={doorman ? styles.popoverHover : styles.popoverHoverOut}
        >
          <p>Check it out!</p>
          <div>
            <button
              onClick={(e) =>
                window.open(
                  "https://github.com/Tannerwill756/LoL-random-champ-FE",
                  "_blank"
                )
              }
            >
              github
            </button>
            <button
              onClick={(e) =>
                window.open("https://lol-random-champ.vercel.app/", "_blank")
              }
            >
              live site
            </button>
          </div>
        </HoverProject>
        <ProjectCover>
          <div>
            <h3>Champion Generator</h3>
            <p>
              An application to help you choose which champion you want to play
              for League of Legends!
            </p>
          </div>
        </ProjectCover>
      </Project>
      <ProjectDiscription>
        <p>
          Champion Generator was a fun 48 hour project built out by my brother
          and myself. The back-end was built using Node.js/Express with a
          PostgreSQL database, seeding all the data ourselves. The front-end
          just uses react with css for styling.
        </p>
        <MobileLinks>
          <p>
            github:{" "}
            <a
              href="https://github.com/Tannerwill756/LoL-random-champ-FE"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Tannerwill756/LoL-random-champ-FE
            </a>
          </p>
          <p>
            live site:{" "}
            <a
              href="https://lol-random-champ.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://lol-random-champ.vercel.app/
            </a>
          </p>
        </MobileLinks>
      </ProjectDiscription>
    </PortfolioWrapper>
  );
}

export default Projects;

const PortfolioWrapper = styled.div`
  width: 100vw;
  padding: 0 55px 50px 55px;
  @media (max-width: 850px) {
    padding: 0 0 50px 0;
  }
  background-image: url(${BGImg});
  font-family: "Montserrat", sans-serif;
  h2 {
    padding-top: 80px;
    font-size: 45px;
    color: black;
    margin: 0;
    font-weight: 200;
  }
`;

const Project = styled.div`
  margin: 30px auto 0 auto;
  box-sizing: border-box;
  width: 90vw;
  max-width: 1000px;
  min-height: 275px;
  background: #28af3e;
  background-size: cover;
  background-position: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 650px) {
    min-height: 225px;
  }
`;

const HoverProject = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #333333;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  p {
    font-size: 34px;
    font-weight: 800px;
    color: white;
    margin: 0;
    @media (max-width: 600px) {
      font-size: 28px;
    }
  }
  button {
    cursor: pointer;
    width: 155px;
    height: 40px;
    margin: 10px;
    color: white;
    font-size: 20px;
    opacity: 1;
    @media (max-width: 600px) {
      width: 105px;
      height: 30px;
    }
    &:nth-child(1) {
      background: #19ab33;
      border: 2px solid #19ab33;
    }
    &:nth-child(2) {
      background: white;
      border: 2px solid white;
      color: #19ab33;
    }
  }
`;
const ProjectCover = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  background: rgba(255, 255, 255, 0.1);
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 650px) {
    min-height: 225px;
    height: 225px;
  }
  div {
    width: 80%;
    padding: 60px 0;
    background: rgba(255, 255, 255, 0.99);
    border: 1px solid black;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 650px) {
      height: 155px;
    }
    h3 {
      color: #f53b54;
      font-size: 35px;
      font-weight: 400;
      margin: 0;
      @media (max-width: 650px) {
        font-size: 28px;
      }
    }
    p {
      color: black;
      padding: 0 20px;
      font-weight: 400;
      @media (max-width: 650px) {
        font-size: 14px;
      }
    }
  }
`;

const ProjectDiscription = styled.div`
  margin: 0 auto 30px auto;
  box-sizing: border-box;
  width: 80vw;
  max-width: 900px;
  min-height: 100px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.05);
  position: relative;
  font-family: "Montserrat", sans-serif;
  p {
    font-size: 16px;
    font-weight: 400;
  }
`;

const MobileLinks = styled.div`
  display: none;
  @media (max-width: 850px) {
    display: block;
  }
  a {
    color: blue;
  }
`;
