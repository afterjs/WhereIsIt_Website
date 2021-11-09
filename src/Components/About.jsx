import React from "react";
import userImage from "../Assets/user.jpg"
import face from "../Assets/socials/facebook.png"


export default props => {
    return (
        <div className="sectionAbout" id="aboutus">
            <div className="aligAboutSection">
                <div className="aboutUsFLex">
                    <h1 className="about">Sobre Nós</h1>
                    <div className="aboutText">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque eget ante eu ligula iaculis scelerisque in et augue.
                            Maecenas rhoncus convallis massa.
                            Donec urna urna, pretium vitae nisi eget, efficitur tempor diam.
                            Pellentesque fringilla ipsum a urna dictum, vitae
                            tincidunt lectus ornare.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque eget ante eu ligula iaculis scelerisque in et augue.
                            Maecenas rhoncus convallis massa.
                            Donec urna urna, pretium vitae nisi eget, efficitur tempor diam.
                            Pellentesque fringilla ipsum a urna dictum, vitae
                            tincidunt lectus ornare.</p>
                    </div>

                    <div className="ImagesDivFlex">
                        <div>

                            <div className="userProfileFlex">
                                <div className="img-pad ">
                                    <img src={userImage} className="userImage" />
                                </div>
                                <div>
                                    <p className="userProfileText">Ricardo Amaro</p>
                                    <span >Fullstack Developer</span>
                                </div>
                                <div>
                                    <div className="socialsFlex">
                                        <div className="socialSpace">
                                            <img src={face} className="face" />
                                        </div>
                                        <div className="socialSpace">
                                            <img src={face} className="face" />
                                        </div>
                                        <div className="socialSpace">
                                            <img src={face} className="face" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className="userProfileFlex">
                                <div className="img-pad ">
                                    <img src={userImage} className="userImage" />
                                </div>
                                <div>
                                    <p className="userProfileText">Hugo Diniz</p>
                                    <span >Fullstack Developer</span>
                                </div>
                                <div>
                                    <div className="socialsFlex">
                                        <div className="socialSpace">
                                            <img src={face} className="face" />
                                        </div>
                                        <div className="socialSpace">
                                            <img src={face} className="face" />
                                        </div>
                                        <div className="socialSpace">
                                            <img src={face} className="face" />
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