import React from 'react'
import './Nav.css'
import { AiFillHome } from 'react-icons/ai'
import { FcAbout } from 'react-icons/fc'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { RiContactsLine } from 'react-icons/ri'

const Nav = () => {
    return (
        <nav>
            <a href='#Header' ><AiFillHome /></a>
            <a href='#About' ><FcAbout /></a>
            <a href='#Services' ><MdOutlineMiscellaneousServices /></a>
            <a href='#Contact' ><RiContactsLine /></a>
        </nav>
    )
}

export default Nav
