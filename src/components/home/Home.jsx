import React from 'react';
import "./home.css";
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className='home container' id='home'>
            <div className='intro'>
                <img src={Me} alt="My Picture" className='home__img' />
                <h1 className="home__name">Mohammed Mustafa</h1>
                <span className="home__education">I am a versatile professional with expertise in software engineering, data science, and red teaming.</span>

                <HeaderSocials />

                <a href="https://m.me/momustafam1" target='_blank' className='btn'>Message Me</a>

                <ScrollDown />
            </div>
            <Shapes />
        </section>
    )
}

export default Home
