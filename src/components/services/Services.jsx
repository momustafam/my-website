import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg"
import Image3 from "../../assets/service-3.svg"
import Image4 from "../../assets/service-4.svg"

const data = [
    {
        id: 1,
        image: Image1,
        title: "Consultation",
        description:
            "Leverage my expertise to navigate complex technical challenges and make strategic decisions with confidence. \
            I offer consultation services across data science, cybersecurity, and software engineering. \
            Whether you need guidance on project planning, technology stack selection, system architecture, or best practices, \
            I provide actionable advice and tailored recommendations to help you achieve your goals and drive success.",
    },
    {
        id: 2,
        image: Image2,
        title: "Data Science",
        description:
            "Unlock the power of your data with my comprehensive data science services. \
            I specialize in extracting actionable insights from complex datasets through advanced statistical analysis, \
            machine learning, and data visualization techniques. Whether you need predictive modeling, \
            data mining, or data-driven decision-making support, I provide tailored solutions to help you make informed business decisions and drive growth.",
    },
    {
        id: 3,
        image: Image3,
        title: "Red Teaming",
        description:
            "Enhance your organization's security posture with my expert red teaming services. \
            I conduct thorough penetration testing, vulnerability assessments, and simulated cyber-attacks to identify weaknesses in your systems before malicious actors do. \
            By mimicking real-world attack scenarios, I help you strengthen your defenses, improve incident response strategies, \
            and ensure robust protection against evolving cyber threats.",
    },
    {
        id: 4,
        image: Image4,
        title: "Software Engineering",
        description:
            "Transform your ideas into robust, scalable software solutions with my professional software engineering services. \
            I offer full-cycle software development, from requirement analysis and system design to coding, testing, and maintenance. \
            Specializing in building high-performance web applications, I ensure that your software projects are delivered on time, \
            within budget, and to the highest quality standards.",
    },
];


const Services = () => {
    return (
        <section className='services container section' id='services'>
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt="service" className="services__img" />

                            <h3 className='services__title'>{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}


export default Services
