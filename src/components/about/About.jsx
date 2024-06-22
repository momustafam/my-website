import React from 'react';
import "./about.css";
import ME from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox';

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">About Me</h2>

            <div className='about__container grid'>
                <img src={ME} alt="My Picture" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            I am a versatile professional with expertise in software engineering, data science, and red teaming.
                            With 1 year of experience, I bring a unique blend of skills in developing robust software solutions,
                            analyzing complex datasets, and identifying security vulnerabilities.
                        </p>
                        <a href="https://drive.google.com/drive/folders/1gM9Bbul9AOsBJ7MuQOkqDIFMNZSom_-t?usp=sharing" target='_blank' className="btn">Download CV</a>
                    </div>
                    <div className="about__skills grid">

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Python</h3>
                                <span className="skills__number">95%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage python"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">C</h3>
                                <span className="skills__number">90%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage c"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Sql</h3>
                                <span className="skills__number">90%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage sql"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">JS</h3>
                                <span className="skills__number">80%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage js"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">R</h3>
                                <span className="skills__number">70%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage r"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}


export default About
