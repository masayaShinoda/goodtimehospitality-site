import Link from 'next/link'
import styles from '../styles/locations.module.scss'

export default function LocationCard({ title, desc, callToAction, bg }) {

    return (
        <Link href={callToAction}>
            <a
                className={styles.card + ` animate__animated animate__backInLeft`} 
                style={{backgroundImage: `url("${bg}")`}}
                onMouseEnter={() => {
                    var mainBg = document.getElementById('mainBg')
                    var imgNode = document.createElement("IMG");
                    imgNode.src = bg
                    imgNode.alt = "background image"
                    mainBg.appendChild(imgNode)
                    document.getElementById('pageTitle').style.color = "#fff"
                    mainBg.classList.add("animate__animated")
                    mainBg.classList.add("animate__fadeIn")
                    }
                }
                onMouseLeave={() => {
                    document.getElementById('pageTitle').style.color = "#000"
                    var mainBg = document.getElementById('mainBg')
                    mainBg.classList.remove("animate__fadeIn")
                    mainBg.removeChild(mainBg.childNodes[0])

                }}
            >
                <div className={styles.textContainer}>
                    <h1>{title}</h1>
                    <span className="animate__animated animate__fadeInUp">
                        <p>{desc}</p>
                    </span>

                </div>
            </a>
        </Link>
    )
}