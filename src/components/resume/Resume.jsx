import React from 'react';
import "./resume.css";
import Data from './Data'
import Card from './Card';

const resume = () => {
    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title" id='experience'>Experience</h2>

            <div className="resume__container grid">
                <div className="timeline grid" >
                    {Data.map((val, index) => {
                        if (val.category === 'experience') {
                            return (
                                <Card key={index} category={val.category} icon={val.icon} title={val.title}
                                    year={val.year} desc={val.desc} />
                            )
                        }
                    })}
                </div>
            </div>


            <h2 className="section__title" id='education'>Education</h2>
            <div className="resume__container grid">

                <div className="timeline grid">
                    {Data.map((val, id) => {
                        if (val.category === 'education') {
                            return (
                                <Card key={id} category={val.category} icon={val.icon} title={val.title}
                                    year={val.year} desc={val.desc} grade={val.grade} />
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    )
}

export default resume
