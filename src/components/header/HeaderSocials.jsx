import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/samuel-nzomo' target='_blank' rel="noreferrer"><BsLinkedin /></a>
            <a href='https://github.com/4samu' target='_blank' rel="noreferrer"><BsGithub /></a>
            <a href='https://twitter.com/sam_nzomo' target='_blank' rel="noreferrer"><FaTwitter /></a>
        </div>
    )
}

export default HeaderSocials