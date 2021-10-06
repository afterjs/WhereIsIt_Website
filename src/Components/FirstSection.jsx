import React from "react";
import Map from "./Map";


export default props => {

    return (
        <section>
            <div className="bgImage">
                <div className="alignSection">
                    <div className="aboutAppText">
                        <h1 className="aboutAppTittle">Lorem IPsum!</h1>
                        <p className="aboutAppJustifyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                            tincidunt lectus ornare.

                        </p>
                    </div>
                    <div>
                        <h1 className="test-me">Testa-me!</h1>
                        <Map></Map>
                    </div>
                </div>
            </div>
        </section>
    )
}


