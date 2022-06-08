import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Testmonials from './components/testmonials/Testmonials'
import About from './components/about/About'
import Contacts from './components/contact/contacts'

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Testmonials />
            <Contacts />
        </>
    )
}

export default App