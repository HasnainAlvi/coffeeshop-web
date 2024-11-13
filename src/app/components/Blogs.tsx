import React from 'react'
import Image from 'next/image'
import "../css-files/blogs.css"

const Blogs = () => {
    return (
        <section className='our-blogs-section'>
            <h2 className='section-title'>
                <span className='first-word'>OUR</span>
                <span className='second-word'>BLOGS</span>
            </h2>
            <div className='blogs-container'>
                <div className='blog-card'>
                    <Image src="/images/blog1.jpg" alt="coffee" className='blogpic' width={450} height={250} />
                    <h3 className='blog-title'>Coffee Recipes to Try at Home</h3>
                    <p className='blog-author'>By Alex / 06sep, 2024</p>
                    <p className='blog-description'>Making the perfect cup of coffee at home is an art. In this blog, we’ll share easy and delicious coffee recipes you can try, from classic espresso to creamy lattes and frothy cappuccinos. Each recipe will make you feel like a barista!

</p>
                    <button className='blog-button'>Explore More</button>
                </div>

                <div className='blog-card'>
                    <Image src="/images/blog2.jpg" alt="coffeeblog2" className='blogpic' width={450} height={250} />
                    <h3 className='blog-title'>Exploring Coffee Beans</h3>
                    <p className='blog-author'>By leo / 4oct, 2024</p>
                    <p className='blog-description'>The choice of coffee beans makes all the difference in flavor. This blog will dive into the origins of different coffee beans and their unique flavors, helping you choose the best coffee bean based on your personal taste preferences.</p>
                    <button className='blog-button'>Explore More</button>
                </div>

                <div className='blog-card'>
                    <Image src="/images/blog3.jpg" alt="coffeeblog2" className='blogpic' width={450} height={250} />
                    <h3 className='blog-title'>
                    Health Benefits of Coffee</h3>
                    <p className='blog-author'>By Alvi / 5th nov, 2024</p>
                    <p className='blog-description'> Coffee boosts energy and enhances focus, making it a great way to start your day. It also supports heart health and may reduce the risk of certain diseases. So, enjoy your cup of coffee knowing it’s benefiting your health!</p>
                    <button className='blog-button'>Explore More</button>
                </div>
            </div>
        </section>

    )
}

export default Blogs