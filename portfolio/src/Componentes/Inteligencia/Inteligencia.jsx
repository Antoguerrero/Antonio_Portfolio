import React from 'react'

export default function Inteligencia() {
  return (
    <div>
      <div className="separadorDos"></div>
      <div className="container">
        <h1 className='soy dos'>ESPECIALIZACIÓN BIG DATA E IA</h1>
      </div>
      <div className="despues tres">
                <div className="sobre tres">
                    <p className='text tres'>Graduado en la Universidad Alfonso
                        X El Sabio.<br />
                        Especialización de dos años de duración.<br/>
                         El primer año enfocado
                        a Big Data.<br/>
                        Desarrollado con Amazon Web Services (AWS), AWS s3, AWS Glue, AWS Data Catalog, EMR, PySpark.
                        <br/>
                        Proyecto en batch sobre agencia de viajes para poder visualizar el destino favorito, 
                        método de transporte más utilizado, hospedaje más utilizado, duración media de los viajes, etc.<br/>
                        El segundo año enfocado a inteligencia artificial.<br/>
                        Desarrollado con Amazon Web Services (AWS),AWS s3, AWS Canvas, notebooks de Jupyter, python, librerías pandas, numpy, random forest.<br/>
                        Proyecto basado en la creación de algoritmo de IA sobre partidas de ajedrez para
                        analizar cantidad de movimientos tanto en la apertura como en la partida, que piezas ganaron 
                        más partidas, las aperturas más utilizadas con más índice de victorias, para que en un futuro se pueda
                         usar el algoritmo para el analisis en partidas.

                    </p>
                </div>
                <div className='imagenes dos'>
                    <img className='categorias' src="/img/uax.png" alt="categoria" />
                    <img className='categorias' src="/img/aws.png" alt="categoria" />
                </div>
            </div>
    </div>
  )
}
