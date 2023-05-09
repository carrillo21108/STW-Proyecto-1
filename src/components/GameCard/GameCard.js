import React from 'react'

function GameCard(props){

    const backUrl = 'url('+props.urlImage+')'
    
    const style = {
        position: 'relative',
        width: '100%',
        marginRight: '2%',
        height: props.height,
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',

        backgroundImage: backUrl,
        marginLeft: props.margin
    }

    const style_a = {
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '100%'    
    }

    const style_img = {
        position: 'absolute',
        width:'23%',
        height: 'auto',
        top: 0,
        left: 0,
        marginTop: '15%',
        marginLeft: '7%'  
    }

    return(
        <div style={style}>
            <img src={props.src} style={style_img}/>
            <a style={style_a}
            href={props.url}
            target='_blank'> 
            </a>
        </div>
    );
}

export default GameCard