import React from "react";
import Map from "./Map";


export default props => {

    return (
  
            <div className="bgImage" id="aboutapp">
                <div className="alignSection">
                    <div className="aboutAppText">
                        <h1 className="aboutAppTittle">WhereIsIt</h1>
                        <p className="aboutAppJustifyText">A WhereIsIt foi uma aplicação criada com o intuito de disponibilizar
                            aos seus utilizadores uma ferramenta de apoio na localização
                            de vários serviços públicos da qual estes mesmos possam usufruir
                            sempre que tiverem necessidade de tal.
                            <br></br>
                            A página web foi desenvolvida usando React e a aplicação móvel foi desenvolvida com React Native.
                            Para o armazenamento e manuseamento de dados usamos a base de dados Firebase.
                        </p>
                    </div>
                    <div className="divMap">
                        <h1 className="test-me">Testa-me!</h1>
                        <Map></Map>
                    </div>
                </div>
            </div>
   
    )
}


