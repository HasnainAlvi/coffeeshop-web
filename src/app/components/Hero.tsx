import React from 'react'
import Image from 'next/image'
import "../css-files/hero.css"

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-image'>
                <Image src="/images/bg.1.jpg" alt="coffee bg" layout="fill" objectFit='cover'  />
            </div>
            <div className='hero-content'>
                <h2>Begin bright with <br />fresh coffee</h2>
                <p>Start your day with the perfect<br /> cup of coffee.
                
                 </p>
                <button className='cta-button'>
                    Order Now
                </button>
            </div>
        </section>
    )
}

export default Hero