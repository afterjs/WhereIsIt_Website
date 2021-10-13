import React from "react";


export default props => {


    return (
        <div className="bgContact" id="contacts">
            <div className="mt-20">
                <h1 className="contactosTitle">Contactos</h1>




                <div className="contactForm"> {/*div form topo*/}


                    <div>

                        <div className="flexBoxContactInputs">
                            <p className="contactoTitles">Nome</p>
                            <input ></input>
                        </div>

                    </div>

                    <div>
                        <div className="flexBoxContactInputs">
                            <p className="contactoTitles">Email</p>
                            <input ></input>
                        </div>
                    </div>


                </div>



                <div className="contactFormArea"> {/*div form topo*/}
                <div>

                    <div className="flexBoxContactArea">
                        <p className="contactoTitles">Assunto</p>
                        <textarea rows="7" cols="110"></textarea>
                    </div>

                </div>

                </div>






            </div>

        </div>
    )


}