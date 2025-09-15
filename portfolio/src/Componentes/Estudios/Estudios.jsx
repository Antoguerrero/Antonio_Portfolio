"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import './Estudios.css';

export default function Estudios() {

    const ref = useRef(null);
    
        const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["start center", "end center"],
        });

    
    
        // Esto nos permite usar transformaciones
        const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
        const rightX = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);

        
    
      

    return (

        <div>
            <div className="separador"></div>
            <div className="despues dos" ref={ref}>
                <div className="sobre dos">
                    <motion.p style={{ x: leftX }} className="text">
                        <p className="text">
                            Durante mi estapa baloncestística he tenido la oportunidad de vivir muchas experiencias
                            increíbles y poder haber disputado en todas las categorías a un alto nivel.
                        </p>
                    </motion.p>

                </div>
                <motion.div style={{ x: rightX }} >
                    <div className='imagenes'>
                        <img className='categorias' src="/img/euroliga.png" alt="categoria" />
                        <img className='categorias' src="/img/copa.jpg" alt="categoria" />
                        <img className='categorias tres' src="/img/eba.jpg" alt="categoria" />
                        <img className='categorias cuatro' src="/img/plata.png" alt="categoria" />
                        <img className='categorias cinco' src="/img/oro.jpg" alt="categoria" />

                        <div className="absoluto">
                            <img className='categorias dos' src="/img/tercera.avif" alt="categoria" />
                            <img className='categorias dos' src="/img/segunda.png" alt="categoria" />
                        </div>

                    </div>
                </motion.div>
            </div>
            <motion.p className="text">
                 Y mientras jugaba me gradué en:
            </motion.p>
            <section>
                    <img  src="/img/ad2.png" alt="ad" />
                    <img  src="/img/daw.svg" alt="daw" />
                    <img  src="/img/ia2.png" alt="ia" />
            </section>

        </div>
    )
}
