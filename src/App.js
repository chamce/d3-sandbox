import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
    const [tiles, setTiles] = useState([
        {data: 'X'},
        {data: 'X'},
        {data: 'X'},
        {data: 'X'},
        {data: 'X'},
        {data: 'X'},
        {data: 'X'},
        {data: 'X'},
        {data: 'X'},
    ]);

    return (
        <>
            <div className='app container-fluid bg-danger d-flex align-items-center justify-content-center'>
                <div className='row border border-3 border-dark rounded bg-white'>
                    { tiles.map((tile, index) => <div className='col-4'>{tile.data}</div>) }
                </div>
            </div>
        </>
    );
}
