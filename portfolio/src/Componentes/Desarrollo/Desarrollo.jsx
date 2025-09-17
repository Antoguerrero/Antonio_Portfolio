import React from 'react'
import './Desarrollo.css';

export default function Desarrollo() {
  return (
    <div>
      <div className="separadorDos"></div>
      <div className="container">
        <h1 className='soy dos'>TÉCNICO SUPERIOR EN DESARROLLO DE APLICACIONES WEB</h1>
      </div>
      <div className="despues tres">
                <div className="sobre tres">
                    <p className='text tres'>Graduado en la Universidad Alfonso
                        X El Sabio.<br />
                        Realicé las prácticas en le empresa Laberit Systemas en la sección de datos, donde aprendí
                        a analizar, transformar y crear dashboard para clientes en QlikView y QlikSense. También tuve la oportunidad
                        de poder desarrollar pequeños cambios para la web interna con React. <br /> La duración de las prácticas fue
                        de Marzo-2025 a Junio-2025.
                    </p>
                </div>
                <div className='imagenes dos'>
                    <img className='categorias' src="/img/uax.png" alt="categoria" />
                    <img className='categorias' src="/img/lab.png" alt="categoria" />
                </div>
            </div>
    </div>
  )
}
