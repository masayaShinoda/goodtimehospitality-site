import { useState, useEffect } from 'react';
import Image from 'next/image'

import styles from '../styles/hero.module.css'

export default function Hero() {
    const token = '471202f89cdbcba570cb00dfa31609'
    const [heros, setHeros] = useState((heros) => {return null})
    const [order, setOrder] = useState(0)

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
            console.log(error);
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
        <div className={styles.heroContainer}>
            {
                
            heros && 
                <>
                    <div className={styles.heroBackground}>
                        <Image
                            src={heros[order]["image"][0]["url"]} 
                            layout="fill"
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.heroContent}>
                        <button 
                            className={styles.arrow}
                            onClick={() => {
                                if((order - 1) > -1) {
                                    setOrder(order - 1)
                                } else {
                                    setOrder(order + 1)
                                }
                                // animChangeSlide()
                                // animRemoveClasses()
                            }}
                        >
                            <i className="arrow left"></i>
                        </button>
                        <button 
                            className={styles.arrow}
                            onClick={() => {
                                if(order < heros.length - 1) {
                                    setOrder(order + 1)
                                } else {
                                    setOrder(order - 1)
                                }
                                // animChangeSlide()
                                // animRemoveClasses()
                            }}
                        >
                            <i className="arrow right"></i>
                        </button>

                        <div className={styles.leftDiv} id="heroContentLeft">
                            <h1 id="heroHeading">{heros[order].heading}</h1>
                            <p>{heros[order].body}</p>
                        </div>
                        <div className={styles.rightDiv}>                            
                            <Image 
                                src={heros[order]["image"][0]["url"]}
                                width="420"
                                height="280"
                                objectFit="cover"
                                id="heroRightImg"
                            />
                            {heros[order].imagecaption && 
                                <p>{heros[order].imagecaption}</p>                            
                            }

                        </div>
                    </div>
                </>                
            }
            
            

        </div>
    )
}