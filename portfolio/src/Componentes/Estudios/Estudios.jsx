"use client";
import './Estudios.css';
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import Administracion from '../Administracion/Administracion';
import Desarrollo from '../Desarrollo/Desarrollo';
import Inteligencia from '../Inteligencia/Inteligencia';



export default function Estudios() {

    const [mostrar, setMostrar] = useState(false);
    const [mostrar2, setMostrar2] = useState(false);
    const [mostrar3, setMostrar3] = useState(false);

    function cerrarTodo() {
        setMostrar(false);
        setMostrar2(false);
        setMostrar3(false);

    }



    function mostrarAD() {
        setMostrar(true);
        setMostrar3(false);
        setMostrar2(false);
    }

    function mostrarDAW() {
        setMostrar2(true);
        setMostrar(false);
        setMostrar3(false);
    }

    function mostrarIA() {
        setMostrar2(false);
        setMostrar3(true);
        setMostrar(false);
    }


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
    }, []);


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
                <div className="item" onClick={mostrarAD}>
                    <img className='porta' src="/img/ad2.png" alt="ad" />
                    <h2 className='tituloDos'>Administración y finanzas</h2>
                </div>

                <div className="item" onClick={mostrarDAW}>
                    <img className='porta' src="/img/daw.svg" alt="daw" />
                    <h2 className='tituloDos center'>Desarrollo de aplicaciones web</h2>
                </div>

                <div className="item" onClick={mostrarIA}>
                    <img className='porta' src="/img/ia3.png" alt="ia" />
                    <h2 className='tituloDos right'>Especialización Big data e IA</h2>
                </div>
            </section>


            <>
                {mostrar && <>
                    (<Administracion />
                    <div className="centrar">
                        <button onClick={cerrarTodo} id="cerrar" className='cerrar'>Cerrar <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg></button>
                    </div>)
                </>}
            </>
            <>
                {mostrar2 && <>
                    (<Desarrollo />
                    <div className="centrar">
                        <button onClick={cerrarTodo} id="cerrar" className='cerrar'>Cerrar <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg></button>
                    </div>)
                </>}
            </>
            <>
                {mostrar3 && <>
                    (<Inteligencia />
                    <div className="centrar">
                        <button onClick={cerrarTodo} id="cerrar" className='cerrar abajo'>Cerrar <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg></button>
                    </div>)
                </>}
            </>

            <div className="separadorDos"></div>

        </div>

    )
}
