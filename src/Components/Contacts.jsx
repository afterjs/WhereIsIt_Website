import React, { useRef } from "react";
import emailjs from "emailjs-com";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export default (props) => {
  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_1h918sl", "template_s21q8up", form.current, "user_1aDo9dM1EV6xi8uPmI8Tw").then(
      (result) => {
        console.log(result.text);
        toast.success("Email enviado com sucesso!");
      },
      (error) => {
        console.log(error.text);
        toast.error("Ocorreu um erro ao enviar o email!");
      }
    );
    e.target.reset();
  };

  return (
    <div className="bgContact" id="contacts">
      <form ref={form} onSubmit={enviarEmail}>
        <div className="mt-20">
          <h1 className="contactosTitle">Contactos</h1>
          <div className="contactForm">
            {" "}
            {/*div form topo*/}
            <div className="flexBoxContactInputs NomeEmail">
              <div className="widthDivs">
                <p className="contactoTitles">Nome</p>
                <input name="nome" required></input>
              </div>
              <div className="widthDivs">
                <p className="contactoTitles">Email</p>
                <input type="email" name="email" required></input>
              </div>
            </div>
          </div>

          <div className="contactFormArea">
            {" "}
            {/*div form topo*/}
            <div className="flexBoxContactArea">
              <p className="contactoTitles">Assunto</p>
              <textarea rows="7" cols="110" name="mensagem" required></textarea>
            </div>
            <div className="flexBoxContactInputs flexBtn">
              <input type="submit" className="btnEnviar" value="ENVIAR MENSAGEM"></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
