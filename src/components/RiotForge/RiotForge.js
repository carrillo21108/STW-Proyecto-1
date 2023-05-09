import './RiotForge.scss'
import React from 'react'
import mag_img from '../../../public/img/mageseeker-logo-white.png'
import rk_img from '../../../public/img/ruined-king-logotype.png'
import hm_img from '../../../public/img/hextech-mayhem-logotype.png'

import GameCard from '../GameCard/GameCard';

function RiotForge(){
    const height = '170px';
    return(
        <div>
            <div className='riotforge-container'>
                <div className='riotforge-titulo'>
                    <h2>Riot Forge</h2>
                </div>

                <div className='riotforge-contenido'>
                    <GameCard
                    url='https://www.themageseeker.com/es-es/'
                    src={mag_img}
                    height={height}
                    urlImage='https://www.riotgames.com/darkroom/564/b4972eae8755f7aa42b02045fbd92334:63a046ff26eb90030e7e617bc8834d15/mageseeker-card.jpg'
                    />

                    <GameCard
                    url='https://www.ruinedking.com/es-es/'
                    src={rk_img}
                    height={height}
                    urlImage='https://www.riotgames.com/darkroom/564/1131e3bf9509d7ffb5d869e3aaf41fb5:b3e79ba4611976070df049f56d290eca/ruined-king-productimage.png'
                    />

                    <GameCard
                    url='https://www.hextechmayhem.com/es-es/'
                    src={hm_img}
                    height={height}
                    urlImage='https://www.riotgames.com/darkroom/564/af936b9432ba7aedc91e01cdb384ece5:3e6c87247a38004becac446cf6ad5b41/hextetch-mayhem-card-bg-1800.jpg'
                    />
                </div>
            </div>
        </div>
    );
}

export default RiotForge