import React from 'react';
import './Administracion.css';

export default function Administracion() {
    return (
        <div>
            <div className="separadorDos"></div>
            <div className="container">
                <h1 className='soy dos'>TÉCNICO SUPERIOR EN ADMINISTRACIÓN Y FINANZAS</h1>
            </div>
            <div className="despues tres">
                <div className="sobre tres">
                    <p className='text tres'>Graduado en la Universidad Alfonso
                        X El Sabio.<br />
                        Realicé las prácticas en le empresa Cebollas Quintanar a modo de comercial, contactando por email o via telefónica
                        posibles clientes, mandándoles y explicándoles el catálogo que disponia la empresa. Así mismo también estuve de apoyo administrativo
                        en gestión de ventas.<br /> La duración de las prácticas fue
                        de Febrero-2022 a Mayo-2022.
                    </p>
                </div>
                <div className='imagenes dos'>
                    <img className='categorias' src="/img/uax.png" alt="categoria" />
                    <img className='categorias' src="/img/cebo.png" alt="categoria" />
                </div>
            </div>
            <div className="separadorDos"></div>


        </div>
    )
}
