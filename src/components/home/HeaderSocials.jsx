import React from 'react'

const HeaderSocials = () => {
    return (
        <div className="home__socials">

            <a href="https://www.linkedin.com/in/momustafam" className="home__social-link" target="_blank">
                <i class="fa-brands fa-linkedin-in"></i>
            </a>

            <a href="https://github.com/momustafam" className="home__social-link" target="_blank">
                <i class="fa-brands fa-github"></i>
            </a>

            <a href="https://www.kaggle.com/mohammedmustafa648" className="home__social-link" target="_blank">
                <i class="fa-brands fa-kaggle"></i>
            </a>

            <a href="mailto:mohammedmustafa112025@gmail.com" className="home__social-link">
                <i class="fa-regular fa-envelope"></i>
            </a>
        </div>
    )
}

export default HeaderSocials
