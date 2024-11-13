import React from 'react'
import Image from "next/image"
import "../css-files/menu.css"

const Menu = () => {
    return (
        <section className='menu'>
            <h2>
                <span className='first-word'>Our</span>
                <span className='second-word'>Menu</span>
            </h2>

            <div className='menu-container'>
                <div className='menu-item'>
                    <Image src="/images/img1.jpeg" alt="img1" width={200} height={200} />
                    <p>Cappuccino Coffee</p>
                    <div className='price-container'>
                        <span className='current-price'>$19</span>
                        <span className='cut-price'>$25</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

                <div className='menu-item'>
                    <Image src="/images/img2.jpeg" alt="img2" width={200} height={200} />
                    <p>Black Coffee</p>
                    <div className='price-container'>
                        <span className='current-price'>$25</span>
                        <span className='cut-price'>$32</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

                <div className='menu-item'>
                    <Image src="/images/img3.jpeg" alt="img3" width={200} height={200} />
                    <p>Cold Brew Coffee</p>
                    <div className='price-container'>
                        <span className='current-price'>$30</span>
                        <span className='cut-price'>$39</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

                <div className='menu-item'>
                    <Image src="/images/img4.jpeg" alt="img4" width={200} height={200} />
                    <p>Irish Coffee</p>
                    <div className='price-container'>
                        <span className='current-price'>$39</span>
                        <span className='cut-price'>$47</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

                <div className='menu-item'>
                    <Image src="/images/img5.jpeg" alt="img5" width={200} height={200} />
                    <p>Affogato Coffee</p>
                    <div className='price-container'>
                        <span className='current-price'>$45</span>
                        <span className='cut-price'>$50</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

                <div className='menu-item'>
                    <Image src="/images/img6.jpeg" alt="img6" width={200} height={200} />
                    <p>Doppio Coffee</p>
                    <div className='price-container'>
                        <span className='current-price'>$50</span>
                        <span className='cut-price'>$57</span>
                    </div>
                    <button>Add to Cart</button>
                </div>

            </div>
        </section>
    )
}

export default Menu