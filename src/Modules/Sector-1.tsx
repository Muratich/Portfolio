import React from "react";
import '../index.scss';

export function Sector1() {
    return (
        <header className="main-header">
            <div className="layers">
                <div className="layer_header">
                    <h4 className='layer_caption'>Beginer developer</h4>
                    <h1 className='layer_title'>Marat Diyarov</h1>
                </div>

                <div className="layer layer_base"></div>
                <div className="layer layer_middle"></div>
                <div className="layer layer_front"></div>
            </div>
        </header>
    )
}