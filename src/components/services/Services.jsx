import React from 'react'
import './Services'
import gif from '../../Assets/GYny.gif';
import './Services.css'

const Services = () => {
    return (
        <section id='Services'>
            <div className='services'>
            <div >
                <img src={gif} alt={gif} className='gifArea'></img>
            </div>
            <div className='heading'>My Services</div>
            <div className='what_i_do'>
                <div className='what_i_do_header'>What I do</div>
                <div className='what_i_do_text '>Software Development</div>
                <div className='what_i_do_text '>Web Development</div>
                <div className='what_i_do_text '>Web Design</div>
                <div className='what_i_do_text '>Blockchain Development</div>
                <div className='what_i_do_text '>Graphic Design</div>
                <div className='what_i_do_text '>UI Design</div>
                <div className='what_i_do_text '>Architectural Design</div>
            </div>
                <div className='skills'>
                    <div className='what_i_do_header'>Skills</div>
                <div className='skills_text'>
                    <h5>React.js</h5>
                    <div className='skills_bar'>
                        <div className='reactjs'/>
                    </div>
                    </div>
                    <div className='skills_text'>
                    <h5>HTML</h5>
                    <div className='skills_bar'>
                        <div className='html'/>
                    </div>
                    </div>
                    <div className='skills_text'>
                    <h5>CSS</h5>
                    <div className='skills_bar'>
                        <div className='css'/>
                    </div>
                    </div>
                    <div className='skills_text'>
                    <h5>C#</h5>
                    <div className='skills_bar'>
                        <div className='c_sharp'/>
                    </div>
                    </div>
                    <div className='skills_text'>
                    <h5>Javascript</h5>
                    <div className='skills_bar'>
                        <div className='js'/>
                    </div>
                    </div>
                    <div className='skills_text'>
                    <h5>Solidity & Web3.0</h5>
                    <div className='skills_bar'>
                        <div className='solidity'/>
                    </div>
                </div>
                </div>
            </div>


        </section>

    )
}

export default Services
