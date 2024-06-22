import React, { useState } from 'react'
import "../portfolio/portfolio.css"
import CertificatesData from './CertificatesData'

const Certificates = () => {
    const [items, setItems] = useState(CertificatesData)
    const filterItem = (categoryItem) => {
        const updatedItems = CertificatesData.filter((curElem) => {
            return curElem.category === categoryItem
        })
        setItems(updatedItems)
    }

    return (
        <section className="work container section" id='certificates'>
            <h2 className="section__title">Professional Certificates</h2>

            <div className="work__filters">
                <span className="work__item" onClick={() => setItems(CertificatesData)}>All</span>
                <span className="work__item" onClick={() => filterItem
                    ("Data Science")}>Data Science</span>
                <span className="work__item" onClick={() => filterItem
                    ("Red Teaming")}>Red Teaming</span>
                <span className="work__item" onClick={() => filterItem
                    ("Software Engineering")}>Software Engineering</span>
            </div>

            <div className="work__container grid">
                {items.map((elem) => {
                    const { id, image, title, category, link } = elem;
                    return (
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt="Portfolio Project" className="work__img" />
                                <div className='work__mask'></div>
                            </div>

                            <span className="work__category">{category}</span>
                            <h3 className="work__title">{title}</h3>
                            <a href={link} target="_blank" className="work__button">
                                <i className="icon-link work__button-icon"></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Certificates
