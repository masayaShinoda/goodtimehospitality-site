import { useState, useEffect } from 'react'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from '../styles/hero.module.css'

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
        // <div className={styles.carouselContainer}>
            <Carousel 
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                renderIndicator={false}
                className={styles.carouselContainer}
            >
                {heros && heros.map(hero => 
                    <>
                        
                        
                        <div className={styles.carousel}>
                            <img src={hero['image'][0]['url']} className={styles.carouselBg}/>
                            <div className={styles.carouselTextContainer}>
                                <span className={styles.carouselText}>
                                    <h1>{hero.heading}</h1>
                                    <p>{hero.body}</p>
                                </span>

                            </div>
                            <img className={styles.carouselImg} src={hero['image'][0]['url']} />
                            {/* <p className="legend">{hero.body}</p> */}
                        </div>
                    </>
                )}
            </Carousel>

        // </div>

        // <div className={styles.heroContainer}>
        //     {
        //     heros && 
        //         <>
        //             <div className={styles.heroBackground}>
        //                 <Image
        //                     src={heros[order]["image"][0]["url"]} 
        //                     layout="fill"
        //                     loading="lazy"
        //                 />
        //             </div>
        //             <div className={styles.heroContent}>
        //                 <button 
        //                     className={styles.arrow}
        //                     onClick={() => {
        //                         handleAnimate()
        //                         if((order - 1) > -1) {
        //                             setOrder(order - 1)
        //                         } else {
        //                             setOrder(order + 1)
        //                         }
        //                     }}
        //                 >
        //                     <i className="arrow left"></i>
        //                 </button>
        //                 <button 
        //                     className={styles.arrow}
        //                     onClick={() => {
        //                         handleAnimate()
        //                         if(order < heros.length - 1) {
        //                             setOrder(order + 1)
        //                         } else {
        //                             setOrder(order - 1)
        //                         }
        //                     }}
        //                 >
        //                     <i className="arrow right"></i>
        //                 </button>

        //                 <div 
        //                     className={styles.leftDiv} 
        //                     id="heroContentLeft"
        //                 >
        //                     <h1 id="heroHeading">{heros[order].heading}</h1>
        //                     <p>{heros[order].body}</p>
        //                 </div>
        //                 <div
        //                     className={`${styles.rightDiv}`} 
        //                     id="heroContentRight"
        //                 >                            
        //                     <Image 
        //                         src={heros[order]["image"][0]["url"]}
        //                         width="420"
        //                         height="280"
        //                         objectFit="cover"
        //                         id="heroRightImg"
        //                     />
        //                     {heros[order].imagecaption && 
        //                         <p>{heros[order].imagecaption}</p>                            
        //                     }
        //                 </div>
        //             </div>
        //         </>
        //     }
        // </div>
    )
}