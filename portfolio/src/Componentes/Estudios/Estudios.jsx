"use client";
import './Estudios.css';
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';



export default function Estudios() {

    const [ver, setVer] = useState(false);
    function dejarVer() {
        setVer(true);
    }

    useEffect(() => {

        const ancho = window.innerWidth;
        const delay = ancho <= 765 ? 3000 : 9000;

        const time = setTimeout(() => {
            dejarVer();
        }, delay);

        return () => clearTimeout(time);
    },[]);


    return (

        <div>
            <div className="separador"></div>
            <div className="despues dos">
                <div className="sobre dos">
                    <p className="text dos">
                        Durante mi estapa baloncestística he tenido la oportunidad de vivir muchas experiencias
                        increíbles y poder haber disputado en todas las categorías a un alto nivel.
                    </p>
                </div>

                <div className='imagenes' style={{ visibility: ver ? "visible" : "hidden", opacity: ver ? 1 : 0, transition: "opacity 1s" }}>
                    <img className='categorias' src="/img/euroliga.png" alt="categoria" />
                    <img className='categorias' src="/img/copa.jpg" alt="categoria" />
                    <img className='categorias' src="/img/oro.png" alt="categoria" />
                    <img className='categorias' src="/img/tercera.avif" alt="categoria" />
                    <img className='categorias' src="/img/segunda.png" alt="categoria" />

                </div>
            </div>
            <section className='portada'>
                <img className='portas' src="/img/euro_play.png" alt="euro" />
                <img className='portas' src="/img/eba_play.png" alt="eba" />
                <img className='portas' src="/img/eba_dos_play.png" alt="eba" />
                <img className='portas' src="/img/plata_play.png" alt="plata" />
                <img className='portas' src="/img/oro_play.png" alt="oro" />

            </section>
            <div className="separadorDos">

            </div>
            <motion.p className="text">
                Y mientras jugaba, me gradué en:
            </motion.p>
            <section className='porada'>
                <div className="item">
                    <img className='porta' src="/img/ad2.png" alt="ad" />
                    <h2 className='tituloDos'>Administración y finanzas</h2>
                </div>

                <div className="item">
                    <img className='porta' src="/img/daw.svg" alt="daw" />
                    <h2 className='tituloDos center'>Desarrollo de aplicaciones web</h2>
                </div>

                <div className="item">
                    <img className='porta' src="/img/ia3.png" alt="ia" />
                    <h2 className='tituloDos right'>Especialización Big data e IA</h2>
                </div>


            </section>



        </div>
    )
}
