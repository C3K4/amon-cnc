import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='category-menu'>
            <div className='category-item'>
                <div className='content'>
                    <h1 className='title'>Satovi</h1>
                    <span>Kupite sada</span>
                </div>
            </div>
            <div className='category-item'>
                <div className='content'>
                    <h1 className='title'>Ikone</h1>
                    <span>Kupite sada</span>
                </div>
            </div>
            <div className='category-item'>
                <div className='content'>
                    <h1 className='title'>Akcesoar</h1>
                    <span>Kupite sada</span>
                </div>
            </div>
            <div className='category-item'>
                <div className='content'>
                    <h1 className='title'>Izrada po zelji</h1>
                    <span>Kupite sada</span>
                </div>
            </div>
            <div className='category-item'>
                <div className='content'>
                    <h1 className='title'>Lovacki motivi</h1>
                    <span className='subtitle'>Kupite sada</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;