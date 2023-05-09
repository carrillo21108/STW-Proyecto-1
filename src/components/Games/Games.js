import './Games.scss'
import React from 'react'
import lol_img from '../../../public/img/lol-logotype.png'
import val_img from '../../../public/img/valorant-logotype.png'
import tft_img from '../../../public/img/tft-logotype-2021.png'
import lolw_img from '../../../public/img/lol-wildrift-logotype.png'
import lor_img from '../../../public/img/legends-of-runeterra-logotype.png'

import GameCard from '../GameCard/GameCard';

function Games(){
    const height = '250px';
    return(
        <div>
            <div className='games-container'>
                <div className='games-titulo'>
                    <h2>Nuestros juegos</h2>
                </div>

                <div className='games-contenido'>
                    <GameCard
                    url='https://www.leagueoflegends.com/es-mx/'
                    src={lol_img}
                    height={height}
                    urlImage='https://www.riotgames.com/darkroom/855/4930733403fae24cf79e5e27be520202:1ead09c2fa8c3429874bc05e5358ccca/lolkv-2023.png'
                    />

                    <GameCard
                    url='https://playvalorant.com/es-mx/'
                    src={val_img}
                    height={height}
                    urlImage='https://www.riotgames.com/darkroom/855/44b450876daf03a3d2844d55ece0a7c4:07ad2fad61d3f037f91d94bbe1d65392/val-ep6-act3.png'
                    />

                    <GameCard
                    url='https://teamfighttactics.leagueoflegends.com/es-mx/'
                    src={tft_img}
                    height={height}
                    urlImage='https://www.riotgames.com/darkroom/855/b6264e7b4f57e417c67d9b6b3ccadebf:d04c52f41a1b3b0e631d8b9f3bd45fd0/tft-2023.png'
                    />

                    <GameCard
                    url='https://wildrift.leagueoflegends.com/es-es/'
                    src={lolw_img}
                    height={height}
                    urlImage='https://www.riotgames.com/darkroom/855/bdc9d7a312cc33ad8e590136688b6ffb:ee9ec26a642d5c9c8edfb6d40354629a/wrka-2023.png'
                    />

                    <GameCard
                    url='https://playruneterra.com/es-es/'
                    src={lor_img}
                    height={height}
                    margin='50%'
                    urlImage='https://www.riotgames.com/darkroom/855/c875580e366fea501ed29e3fb1f3a49d:e65e90e877828ed0689a609596ea8dd5/lorka-2023.png'
                    />
                </div>
            </div>
        </div>
    );
}

export default Games