import React from 'react'
import './Estudios.css';

export default function Estudios() {




    return (

        <div>
            <div className="separador"></div>
            <div className="despues dos">
                <div className="sobre dos">
                    <p className="text">
                        Durante mi estapa baloncestística he tenido la oportunidad de vivir muchas experiencias
                        increíbles y poder haber disputado en todas las categorías a un alto nivel.
                    </p>
                </div>
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
            </div>

        </div>
    )
}
