import './Careers.scss'
import React from 'react'

function Careers(){

    return(
        <div>
            <div className='careers-container'>
                <div className='careers-content'>
                    <div>
                        <h2>¡Buscamos gente!</h2>
                        <p>Uníos a Riot para forjar vuestro camino y crear inolvidables experiencias para los jugadores.</p>
                        
                        <div>
                            <a
                            href='https://www.riotgames.com/es/trabaja-con-nosotros'
                            target='_blank' className='first-target'>
                                <span>
                                    242
                                </span>
                                Puestos disponibles
                            </a>
                            <a
                            href='https://www.riotgames.com/es/trabaja-con-nosotros'
                            target='_blank' className='second-target'>
                                <span>
                                    24
                                </span>
                                Oficinas
                            </a>
                        </div>

                        <a
                        href='https://www.riotgames.com/es/trabaja-con-nosotros'
                        target='_blank' className='principal-target'>
                            <span>
                                Descubrir oportunidades
                            </span>
                        </a>
                    </div>
                </div>

                <div className='careers-image'>
                </div>
                
            </div>
        </div>
    );
}

export default Careers