import React from 'react'
import "./pricing.css"
import Image1 from '../../assets/price-1.svg'
import Image2 from '../../assets/price-2.svg'
import Image3 from '../../assets/price-3.svg'

const Pricing = () => {
    return (
        <section className="pricing container section" id='prices'>
            <h2 className="section__title">Pricing Plans</h2>

            <div className='pricing__container grid'>

                <div className="pricing__item">
                    <img src={Image1} alt="First Price Plan" className="princing__img" />
                    <h3 className="pricing__plan">Hourly</h3>
                    <p className="pricing__desc">
                        This plan is ideal for short-term projects, consulting, or tasks where the scope is not fully defined upfront.
                        Clients are billed based on the number of hours worked.
                    </p>
                    <p className="pricing__support">
                        <b>Billing Cycle:</b> Weekly <br />
                        <b>Best For:</b> Quick tasks, on-demand consulting, ongoing support
                    </p>
                    <h3 className="price">
                        <em>$</em>5<span>hour</span>
                    </h3>
                    <a href="https://m.me/momustafam1" target='_blank' className='btn'>Get Started</a>
                </div>

                <div className="pricing__item best">
                    <span className='badge'>Recommended</span>
                    <img src={Image2} alt="Second Price Plan" className="princing__img" />
                    <h3 className="pricing__plan">Monthly</h3>
                    <p className="pricing__desc">
                        This plan is suitable for clients who need continuous support and want a dedicated amount of time each month.
                        It's typically used for ongoing projects, maintenance, or advisory roles.
                    </p>
                    <p className="pricing__support">
                        <b>Billing Cycle:</b> Monthly <br />
                        <b>Best For:</b> Long-term projects, continuous support, maintenance work
                    </p>
                    <h3 className="price">
                        <em>$</em>500<span>Month</span>
                    </h3>
                    <a href="https://m.me/momustafam1" target='_blank' className='btn'>Get Started</a>
                </div>

                <div className="pricing__item">
                    <img src={Image3} alt="Third Price Plan" className="princing__img" />
                    <h3 className="pricing__plan">Per-Project</h3>
                    <p className="pricing__desc">
                        This plan is perfect for well-defined projects with a clear scope and deliverables.
                        Clients pay a fixed price for the entire project.
                    </p>
                    <p className="pricing__support">
                        <b>Billing Cycle:</b> Typically, 50% upfront, 50% upon completion (or milestone-based payments) <br />
                        <b>Best For:</b> Specific, well-defined projects with clear deliverables and timelines
                    </p>
                    <h3 className="price">
                        Depend On
                    </h3>
                    <a href="https://m.me/momustafam1" target='_blank' className='btn'>Get Started</a>
                </div>

            </div>
        </section>
    )
}


export default Pricing
