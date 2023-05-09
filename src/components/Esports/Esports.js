import './Esports.scss'
import React from 'react'
import lol_e_img from '../../../public/img/lol-esports-logo-full.png'
import val_e_img from '../../../public/img/val-esports-logo-2023.png'

import GameCard from '../GameCard/GameCard';

function Esports(){
    const height = '250px';
    return(
        <div>
            <div className='esports-container'>
                <div className='esports-titulo'>
                    <h2>Esports</h2>
                </div>

                <div className='esports-contenido'>
                    <GameCard
                    url='https://lolesports.com'
                    src={lol_e_img}
                    height={height}
                    urlImage='https://www.riotgames.com/darkroom/855/e4b952c011fbde3c7cf50d303d2b7c4e:32b4f5591dc31f1dd0b822460902faf2/lol-esports-kv-2023.png'
                    />

                    <GameCard
                    url='https://valorantesports.com'
                    src={val_e_img}
                    height={height}
                    urlImage='https://www.riotgames.com/darkroom/855/24ae38d6bcfda35c84ded6c6cd77a44e:19f7b1c2f0237496de84d9eb0fc24bfa/val.png'
                    />
                </div>
            </div>
        </div>
    );
}

export default Esports