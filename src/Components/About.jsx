import React from "react";

import Face from "../Assets/socials/facebook.png"
import Hugo from "../Assets/Developers/hugo.jpg"
import Ricardo from "../Assets/Developers/ricardo.jpeg"

export default props => {
    return (
        <div className="sectionAbout" id="aboutus">
            <div className="aligAboutSection">
                <div className="aboutUsFLex">
                    <h1 className="about">Sobre Nós</h1>
                    <div className="aboutText">
                        <p>Ambos alunos a frequentar o Instituto Politécnico de Viana do Castelo,
                            frequentam o CTeSP de Tecnologias e Programação de Sistemas de Informação
                            com o intuito de aprender mais nas várias áreas de informática para futuramente
                            trabalhar na área.<br></br>
                            Fizeram um curso profissional no secundário baseado na mesma área que o atual curso
                            onde conseguiram abranger algumas bases a nivel de informática.
                        </p>
                    </div>

                    <div className="ImagesDivFlex">
                        <div>
                            <div className="userProfileFlex">
                                <div className="img-pad ">
                                    <img src={Ricardo} className="userImage" />
                                </div>
                                <div>
                                    <p className="userProfileText">Ricardo Amaro</p>
                                    <span >Fullstack Developer</span>
                                </div>
                                <div>
                                    <div className="socialsFlex">
                                        <div className="socialSpace">
                                            <img src={Face} className="face" />
                                        </div>
                                        <div className="socialSpace">
                                            <img src={Face} className="face" />
                                        </div>
                                        <div className="socialSpace">
                                            <img src={Face} className="face" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="userProfileFlex">
                                <div className="img-pad ">
                                    <img src={Hugo} className="userImage" />
                                </div>
                                <div>
                                    <p className="userProfileText">Hugo Diniz</p>
                                    <span >Fullstack Developer</span>
                                </div>
                                <div>
                                    <div className="socialsFlex">
                                        <div className="socialSpace">
                                            <img src={Face} className="face" />
                                        </div>
                                        <div className="socialSpace">
                                            <img src={Face} className="face" />
                                        </div>
                                        <div className="socialSpace">
                                            <img src={Face} className="face" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}