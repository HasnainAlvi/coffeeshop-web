import React from 'react'
import Image from 'next/image'
import "../css-files/about.css"

const About = () => {
  return (
    <section className='about'>
      <h2>
        <span className='first-word'>ABOUT</span>
        <span className='second-word'>US</span>
      </h2>

      <div className='about-content'>
        <Image src="/images/about.jpg" alt="Coffee" width={500} height={500} />

        <div className='about-text'>
          <h3>What Makes Our Coffee Special?</h3>
          <p> Our coffee stands out because it’s crafted with care and quality at every step. We start with premium beans, sourced directly from sustainable farms, ensuring not only a rich and complex flavor but also supporting ethical practices. Each batch is freshly roasted to lock in natural oils and unique aromas, delivering a cup that’s both fresh and flavorful. Our skilled baristas use precise brewing techniques to bring out the perfect balance, catering to a variety of preferences, from robust espressos to smooth, creamy lattes. With our commitment to quality and a dedication to creating a memorable experience, every cup of our coffee is truly special.
</p>
          
          <button className='about-button'>
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default About