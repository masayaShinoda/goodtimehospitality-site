import { useState, useEffect } from 'react'
import Link from 'next/link'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from '../styles/hero.module.scss'

export default function Hero() {
    const token = '471202f89cdbcba570cb00dfa31609'
    const [heros, setHeros] = useState((heros) => {return null})
    const [order, setOrder] = useState(0)
    const [animate, setAnimate] = useState(false)

    const handleAnimate = () => {
        setAnimate(!animate)
    }

    useEffect(() => {
        fetch(
            'https://graphql.datocms.com/',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
              body: JSON.stringify({
                query: `{ 
                    allHeros {
                        id
                        image {
                          url
                          alt
                        }
                        heading
                        body
                        imagecaption
                        actionButtonOptional {
                            text
                            url
                        }
                      }
                  }`
              }),
            }
        )
        .then(res => res.json())
        .then((res) => {
            setHeros(res.data["allHeros"])
        })
        .catch((error) => {
            console.log(error)
        });
        console.log(heros)
    }, [])     

    function animChangeSlide(heros) {
        document.getElementById("heroContentLeft").classList.add(`animate__animated`)
        document.getElementById("heroContentLeft").classList.add(`animate__fast`)
        document.getElementById("heroContentLeft").classList.add(`animate__slideInRight`)
        document.getElementById("heroRightImg").classList.add(`animate__animated`)
        document.getElementById("heroRightImg").classList.add(`animate__slideInUp`)
        document.getElementById("heroRightImg").classList.add(`animate__fast`)
    }
    function animRemoveClasses() {
        setTimeout(() => {
            document.getElementById("heroContentLeft").classList.remove(`animate__slideInRight`)
            document.getElementById("heroRightImg").classList.remove(`animate__slideInUp`)
        }, 1200)
    }

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
        <>
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
                <img className={styles.carouselImg} src={hero['image'][0]['url']} />
            </div>
        </>
        ) : <div className="lds_ellipsis"><div></div><div></div><div></div><div></div></div>}
    </Carousel>
    )
}