import React from 'react'
import './header.css'
import CTA from './CTA'
import S from '../../Assets/side1.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
    return (
        <section id='Header'>
            <header className='header'>
                <div className='container header__container'>
                    <h5>Hello I'm</h5>
                    <h1>Samuel Nzomo</h1>
                    <h5 className='text-light'>Software Engineer</h5>
                    <CTA />
                    <HeaderSocials />

                    <div className='side'>
                        <img src={S} alt='me' />
                    </div>

                    <a href='#Contact' className='scroll__down'>Scroll down</a>
                </div>
            </header>
        </section>
    )
}

export default header
