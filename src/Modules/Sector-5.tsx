import React, { useState } from 'react';

export function Sector5() {
    const awards = [require('../img/Awards/Award1.png'), require('../img/Awards/Award2.png'),  require('../img/Awards/Award3.png')];

    const[id, setID] = useState(0);
    const[award, setAward] = useState(awards[id]);

    function Switch() {
        if (id < awards.length-1) setID(prev => prev+1);
        else setID(0);
        setAward(awards[id]);
    }

    return (
        <div className='awards'>
            <div className='award' onClick={Switch} style={{backgroundImage: `url(${award})`}}></div>
            <h1 className='tap'>Tap to image</h1>
        </div>
    )
}