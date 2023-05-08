import './News.scss'
import React from 'react'
import msi_img from '../../../public/img/msi2023.png'
import poster_img from '../../../public/img/msi23-fullkv-poster-3840x1600-black.png'
import esport_video from '../../../public/video/global-esports-msi-hype-masthead.mp4'

function News(){

    return(
        <div>
            <div className='background-video'>
                <video
                autoPlay
                muted
                loop
                preload='auto'
                playsInline
                poster={poster_img}>
                    <source
                    src={esport_video}
                    type='video/mp4'></source>
                </video>
            </div>
            <div className='msi-container'>
                <div className='msi-content'>
                    <div>
                        <img src={msi_img}/>
                    </div>
                    <h1>VÍDEO DEL MSI 2023</h1>
                    <p>Ha llegado la hora del desafío. Preparaos para la gran batalla en Londres.</p>
                    <a
                    href='https://www.youtube.com/watch?v=UeOFKSq7RJQ&feature=youtu.be'
                    target='_blank'>
                        <span>
                            <div>
                                <svg viewBox='0 0 24 24' fill='none'>
                                    <path fillRule='evenodd' clipRule='evenodd'
                                    d="M15.003 14H3.5v-4h11.502l-4.165-4.538 2.705-2.947 7.353 8.012c.747.813.747 2.133 0 2.947l-7.353 8.011-2.705-2.947L15.003 14z"
                                    fill="#F0F0F0"></path>
                                </svg>
                            </div>
                            Ver ahora
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default News