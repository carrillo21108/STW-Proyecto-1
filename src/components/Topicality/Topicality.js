import './Topicality.scss'
import React from 'react'
import MiniTarget from '../MiniTarget/MiniTarget';

function Topicality(){

    return(
        <div>
            <div className='topicality-container'>
                <div className='topicality-titulo'>
                    <h2>Actualidad</h2>
                    <a
                    href='https://www.riotgames.com/es/noticias'>
                        <span>
                            VER TODO
                        </span>
                    </a>
                </div>

                <div className='topicality-contenido'>
                    <div className='main-target'>
                        <h1>Informe del impacto anual de 2022</h1>
                        <a
                        href='https://www.riotgames.com/es/2022-riot-games-impact-report'> 
                        </a>
                    </div>
                    
                    <div className='second-target'>
                        <MiniTarget
                        titulo='Prime Gaming y Riot Games lo vuelven a...'
                        descripcion='NOTICIAS'
                        url='https://www.riotgames.com/es/noticias/prime-gaming-y-riot-games-lo-vuelven-a-hacer'
                        urlImage='https://www.riotgames.com/darkroom/1370/4d54f9d2c0df5275758d74680ab0e5a4:4bf06cffb1bee88745e6fdbdf3a3d910/riotpr-mar2023-social-twitch-1920x1080-03-17-2023.png'/>

                        <MiniTarget
                        titulo='Más que una etiqueta: de Duck Hunt a Riot...'
                        descripcion='DENTRO DE RIOT'
                        url='https://www.riotgames.com/es/noticias/maye-mac-swiney-riot-barcelona-es'
                        urlImage='https://www.riotgames.com/darkroom/1370/d1eeab9c53f342509c0fb13a983b7079:fc78613ac270d27249ed8e82da3cfda9/2023-whm-maye-macswiney-16x9.png'/>

                        <MiniTarget
                        titulo='Reflexión Del Campeón: Milio'
                        descripcion='DENTRO DE RIOT'
                        url='https://www.leagueoflegends.com/es-es/news/dev/champion-insights-milio/'
                        urlImage='https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3cb707ebde19590b/64015c1ee35cc90ebcbd2a37/00MilioHeader.jpg'/>
                        
                        <MiniTarget
                        titulo='Damos voz a la comunidad negra en el...'
                        descripcion='DENTRO DE RIOT'
                        url='https://www.riotgames.com/es/noticias/mes-historia-afroamericana-riot-games'
                        urlImage='https://www.riotgames.com/darkroom/1370/231feb0372550ecf40a01173020aaa1c:6d2f94df63d5af1e612c7b4b74e9953b/bhm-key-art.png'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topicality