import React from "react";

import Face from "../Assets/socials/facebook.png";
import Github from "../Assets/socials/github.png";
import Linkedin from "../Assets/socials/linked.png";
import Insta from "../Assets/socials/insta.png";
import Hugo from "../Assets/Developers/hugo.jpg";
import Ricardo from "../Assets/Developers/ricardo.jpeg";

export default (props) => {
  const rounded = {
    borderRadius: "50%",
  };
  return (
    <div className="sectionAbout" id="aboutus">
      <div className="aligAboutSection">
        <div className="aboutUsFLex">
          <h1 className="about">Sobre Nós</h1>
          <div className="aboutText">
            <p>
              Ambos alunos a frequentar o Instituto Politécnico de Viana do Castelo, frequentam o CTeSP de Tecnologias e Programação de Sistemas de Informação com o intuito de aprender mais nas várias áreas de informática para futuramente trabalhar na área.<br></br>
              Fizeram um curso profissional no secundário baseado na mesma área que o atual curso onde conseguiram abranger algumas bases a nivel de informática.
            </p>
          </div>

          <div className="ImagesDivFlex">
            <div>
              <div className="userProfileFlex">
                <div className="img-pad ">
                  <img src={Ricardo} className="userImage" style={rounded} />
                </div>
                <div>
                  <p className="userProfileText">Ricardo Amaro</p>
                  <span>Fullstack Developer</span>
                </div>
                <div>
                  <div className="socialsFlex">
                    <a target="_blank" href="https://instagram.com/ricardoxma01">
                      <div className="socialSpace">
                        <img src={Insta} className="face" />
                      </div>
                    </a>
                    <a target="_blank" href="https://github.com/afterjs/">
                      <div className="socialSpace">
                        <img src={Github} className="face" />
                      </div>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/ricardo-amaro-74b758218/">
                      <div className="socialSpace">
                        <img src={Linkedin} className="face" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="userProfileFlex">
                <div className="img-pad ">
                  <img src={Hugo} className="userImage" style={rounded} />
                </div>
                <div>
                  <p className="userProfileText">Hugo Diniz</p>
                  <span>Fullstack Developer</span>
                </div>
                <div className="socialsFlex">
                  <a target="_blank" href="https://www.instagram.com/hugodiniz2001/">
                    <div className="socialSpace">
                      <img src={Insta} className="face" />
                    </div>
                  </a>
                  <a target="_blank" href="https://github.com/mchuguinho">
                    <div className="socialSpace">
                      <img src={Github} className="face" />
                    </div>
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/in/hugo-diniz-6b046622a/">
                    <div className="socialSpace">
                      <img src={Linkedin} className="face" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
