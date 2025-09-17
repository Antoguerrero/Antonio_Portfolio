import React, { useState } from 'react';
import './Titulo.css';
import { useEffect } from 'react';

export default function Titulo() {

    const [ver, setVer] = useState(false);

    function dejarVer() {
        setVer(true);
    }


    

    

    useEffect(() => {

        const ancho = window.innerWidth;
        const delay = ancho <= 765 ? 2000 : 8000;

        const time = setTimeout(() => {
            dejarVer();
        }, delay);

        return () => clearTimeout(time);
    },[]);


    return (

        <div>
            <div className="container">
                <h1 className='tituloPrincipal'>Bienvenido al portfolio de Antonio Guerrero</h1>
            </div>

            
                
                    <div className="container2" style={{ visibility: ver ? "visible" : "hidden", opacity: ver ? 1 : 0, transition: "opacity 1s" }}>
                        <h1 className='soy'style={{ visibility: ver ? "visible" : "hidden"}}>¿QUIÉN SOY?</h1>
                    </div>
                    <div className='despues'style={{ visibility: ver ? "visible" : "hidden", opacity: ver ? 1 : 0, transition: "opacity 1s" }}>
                        <div className='foto'style={{ visibility: ver ? "visible" : "hidden", opacity: ver ? 1 : 0, transition: "opacity 1s" }}>
                            <img className='imagen'style={{ visibility: ver ? "visible" : "hidden", opacity: ver ? 1 : 0, transition: "opacity 1s" }} src="/img/perfil.JPG" alt="foto" />
                        </div>
                        <div className='sobre'style={{ visibility: ver ? "visible" : "hidden", opacity: ver ? 1 : 0, transition: "opacity 1s" }}>
                            <p className='text'style={{ visibility: ver ? "visible" : "hidden", opacity: ver ? 1 : 0, transition: "opacity 1s" }}>Soy Antonio Guerrero, una persona alegre, puntual, empática, rigurosa, proactiva y muy
                                trabajadora.
                                Manejo muy bien las redes sociales ya que estoy activamente creando contenido.
                                Me gusta trabajar en equipo.
                                Y hasta hace muy poco era jugador profesional de baloncesto.</p>
                        </div>
                    </div>
                
          

        </div>
    )
}
