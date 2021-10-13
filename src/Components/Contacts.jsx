import React, { useRef } from "react";
import emailjs from 'emailjs-com'


export default props => {

    const form = useRef();

    const enviarEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_1h918sl', 'template_s21q8up', form.current, 'user_1aDo9dM1EV6xi8uPmI8Tw')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        e.target.reset()
    };

    return (
        <div className="bgContact" id="contacts">
            <form ref={form} onSubmit={enviarEmail}>
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
                    <div>
                        <div className="flexBoxContactInputs">
                            <input type="submit" className="btnEnviar" value="ENVIAR MENSAGEM"></input>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    )


}