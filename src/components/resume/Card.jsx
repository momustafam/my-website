import React from 'react'

const Card = (props) => {
    return (
        <div className='timeline__item'>
            <i className={props.icon}></i>
            <span className="timeline__date">{props.year}</span>
            <h3 className='timeline__title' dangerouslySetInnerHTML={{ __html: props.title }} />
            <p className="timeline__text" dangerouslySetInnerHTML={{ __html: props.desc }} />
            {props.category === "education" && (
                <p className="timeline__text">Grade: {props.grade}</p>
            )
            }
        </div >
    )
}

export default Card
