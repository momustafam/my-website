import React from 'react'

const AboutBox = () => {
    return (
        <div className='about__boxes grid'>
            <div className="about_box">
                <i className="about__icon icon-user-following"></i>

                <div>
                    <h3 className='about__title'>2k+</h3>
                    <span className='about__subtitle'>LinkedIn Followers</span>
                </div>
            </div>

            <div className="about_box">
                <i className="about__icon icon-badge"></i>

                <div>
                    <h3 className='about__title'>5+</h3>
                    <span className='about__subtitle'>Professional Certificates</span>
                </div>
            </div>

            <div className="about_box">
                <i className="about__icon icon-briefcase"></i>

                <div>
                    <h3 className='about__title'>1+</h3>
                    <span className='about__subtitle'>Years of Experience</span>
                </div>
            </div>

            <div className="about_box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className='about__title'>10+</h3>
                    <span className='about__subtitle'>Projects Completed</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox
