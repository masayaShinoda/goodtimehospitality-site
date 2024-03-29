import { Fragment } from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from '../styles/hero.module.scss'

export default function Hero({ data }) {
    const [heros, setHeros] = useState((data) => {return null})
    // const [order, setOrder] = useState(0)
    // const [animate, setAnimate] = useState(false)

    // const handleAnimate = () => {
    //     setAnimate(!animate)
    // }

    useEffect(() => {
        setHeros(data)
        // console.log(data)
    }, [data])

    // function animChangeSlide(heros) {
    //     document.getElementById("heroContentLeft").classList.add(`animate__animated`)
    //     document.getElementById("heroContentLeft").classList.add(`animate__fast`)
    //     document.getElementById("heroContentLeft").classList.add(`animate__slideInRight`)
    //     document.getElementById("heroRightImg").classList.add(`animate__animated`)
    //     document.getElementById("heroRightImg").classList.add(`animate__slideInUp`)
    //     document.getElementById("heroRightImg").classList.add(`animate__fast`)
    // }
    // function animRemoveClasses() {
    //     setTimeout(() => {
    //         document.getElementById("heroContentLeft").classList.remove(`animate__slideInRight`)
    //         document.getElementById("heroRightImg").classList.remove(`animate__slideInUp`)
    //     }, 1200)
    // }

    return (
    <Carousel 
        autoPlay={true}
        transitionTime={600}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        useKeyboardArrows={true}
        swipeScrollTolerance={20}
        
        preventMovementUntilSwipeScrollTolerance={true}
        className={styles.carouselContainer}
    >
        {heros ? heros.map(hero => 
        <Fragment key={hero.id}>
            <div className={styles.carousel}>
                <img src={hero['image'][0]['url']} className={styles.carouselBg}/>
                <div className={styles.carouselTextContainer}>
                    <span className={styles.carouselText}>
                        <h2>{hero.heading}</h2>
                        <p>{hero.body}</p>
                        {hero.actionButtonOptional[0] ? 
                            <Link href={hero.actionButtonOptional[0].url}>
                                <a className={styles.callToAction}>
                                {hero.actionButtonOptional[0].text}
                                </a>
                            </Link>
                        : null}
                    </span>

                </div>
                <div
                className={styles.carouselImg} 
                >
                    <Image 
                    width="1500" height="1000"
                    loading="lazy"
                    src={hero['image'][0]['url']} />
                </div>
            </div>
        </Fragment >
        ) : <div className={styles.loading_hero}>
            <div
                className="lds_ellipsis"><div></div><div></div><div></div><div></div></div>
            </div> 
        }
    </Carousel>
    )
}