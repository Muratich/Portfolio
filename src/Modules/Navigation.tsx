import React from "react";
import '../index.scss';

export function Navigation() {
    return (
        <div className="Navigation">
            <a className='Nav' href={'#Main'}>Main</a>
            <a className='Nav' href={'#Photo'}>Photo</a>
            <a className='Nav' href={'#Work'}>Work</a>
            <a className='Nav' href={'#Contact'}>Contact</a>
        </div>
    )
}