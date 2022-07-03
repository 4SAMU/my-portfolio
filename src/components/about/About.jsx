import React from 'react'
import './About.css'
import Me from '../../Assets/me.jpg'
import { FaAward } from 'react-icons/fa'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { VscNewFolder } from 'react-icons/vsc'

const about = () => {
    return (
        <section id='About'>
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about-me'>
                    <div className='about-me image'>
                        <img src={Me} alt='me'>
                        </img>
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>2+ years of experience</small>
                        </article>
                        <article className='about__card'>
                            <AiOutlineUsergroupAdd className='about__icon' />
                            <h5>Clients</h5>
                            <small>20+ clients Worldwide</small>
                        </article>
                        <article className='about__card'>
                            <VscNewFolder className='about__icon' />
                            <h5>Projects</h5>
                            <small>99+ successful projects</small>
                        </article>
                    </div>
                    <p>
                        I'm motivated, adaptable and responsible software engineer who will always utilize the professional and technical skills developed through thorough studies and experiences in this field. I have a strong self-drive
                        to work and see things through completion.
                    </p> <br />

                    <a href='#Contact' className='btn btn-primary'>Lets Talk </a>
                </div>

            </div>
        </section>
    )
}

export default about
