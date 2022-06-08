import React from 'react'
import CV from '../../Assets/cv.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} className='btn' download={CV}>Download CV</a>
            <a href='#Contact' className='btn btn-primary'>Lets Talk </a>
        </div>
    )
}

export default CTA
