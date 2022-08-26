import React from 'react'
import CV from '../../Assets/cv.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download={CV}><button className='btn' >Download CV</button></a>
            <a href='#Contact'><button className='btn btn-primary'>Lets Talk</button> </a>
        </div>
    )
}

export default CTA
