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
      <div className="container">
        <h1 className='soy dos'>EXPERIENCIA LABORAL DESARROLLO APLICACIONES WEB</h1>
      </div>
      <p className='text'>
        <div className="etiqueta">
          - Desarrollador y diseñador web - <a className='link' href='https://reyeshypnose.com/' target='_blank' rel='noreferrer noopener'>Fisio hipnosis</a>
          <br />
          <sub>Desarrollado con React, JS, Bootstrap</sub>
        </div>

        <br /><br />

        <div className="etiqueta">
          - Desarrollador y diseñador web - <a className='link' href='https://www.cebollasquintanar.com/' target='_blank' rel='noreferrer noopener'>Cebollas Quintanar</a>
          <br /><sub>Desarrollado con CMS</sub>
        </div>

        <br /><br />

        <div className="etiqueta">
          - Desarrollador y diseñador web - Web de boda.
          <br /><sub>Desarrollado con CMS (Wordpress)</sub>
        </div>

        <br /><br />

        <div className="etiqueta">
          - Prácticas DAW - Labreit Systemas.
          <br />
          <sub>Unidad de datos, QlikView, QlikSense, desarrollo con React en web interna</sub>
        </div>

        <br /><br />
      </p>
      <div className="container">
        <h1 className='soy dos'>PROYECTOS DESTACADOS</h1>
      </div>
      <p className='text'>
        <div className="etiqueta">
          - Página web de colección personal - <a className='link' href='https://badbunnycollection.vercel.app/' target='_blank' rel='noreferrer noopener'>BAD BUNNY COLLECTION</a>
          <br />
          <sub>Desarrollado con React, JS, Bootstrap, 3D-Modeling</sub>
        </div>

        <br /><br />

        <div className="etiqueta">
          - Proyecto final de grado -  Página web Escape Room
          <sub>Desarrollado con Front: HTML5, CSS3, JS, Bootstrap. Back: Php. Database: MySQL</sub>
        </div>

      </p>


    </div>
  )
}
