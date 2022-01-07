import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/images/logo-goodtimegrouphospitality.png'
import styles from '../styles/nav.module.css'
import { useRouter } from 'next/router'

export default function Nav() {
    const router = useRouter()
    function openNav() {
        document.getElementById("navMobile").style.display = "flex"
        document.getElementById("openNavBtn").style.display = "none"
        document.getElementById("closeNavBtn").style.display = "block"
    }
    function closeNav() {
        document.getElementById("navMobile").style.display = "none"
        document.getElementById("openNavBtn").style.display = "block"
        document.getElementById("closeNavBtn").style.display = "none"
    }

    return (
        <div className={styles.navContainer}>
            <div className={styles.navContent}>
                <Link href="/" className={styles.logoLink}>
                    <a><Image src={logo} width="100" height="100" alt="Logo" /></a>
                </Link>
                <span className={styles.navLinks}>
                    <Link href="/">
                        <a className={router.pathname === "/" ? `${styles.active}` : ""}>
                        Home
                        </a>
                    </Link>
                    <Link href="/offerings" className={styles.dropdownNav}>
                        <a className={router.pathname === "/offerings" ? `${styles.active}` : ""}>
                        Offerings
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className={router.pathname === "/about" ? `${styles.active}` : ""}>
                        About
                        </a>
                    </Link>
                </span>
            </div>
            <Link href="/">
                <a className={styles.bookingLink}>
                    <Image src="/icons/phone_result.webp" width="18px" height="18px" />
                    <p>Booking</p>
                </a>
            </Link>
            <button id="openNavBtn" onClick={openNav} className={styles.openNavBtn} 
            style={{display: `block`}}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <button id="closeNavBtn" onClick={closeNav} className={styles.closeNavBtn} 
            // style={{display: `none`}}
            >
                <div>
                    <span></span>
                    <span></span>   
                </div>
            </button>
            <Link href="/">
                <a className={styles.mobileLogoLink}>
                    <Image src={logo} width="100" height="100" alt="Logo" />
                </a>
            </Link>
            <div className={styles.navMobile} style={{display: `none`}} id="navMobile">
                <span className={styles.mobileLinks}>
                    <Link href="/">
                        <a onClick={closeNav} className={router.pathname === "/" ? `${styles.active}` : ""}>
                        Home
                        </a>
                    </Link>
                    <Link href="/offerings">
                        <a onClick={closeNav} className={router.pathname === "/locations" ? `${styles.active}` : ""}>
                        Offerings
                        </a>
                    </Link>
                    <Link href="/about">
                        <a onClick={closeNav} className={router.pathname === "/about" ? `${styles.active}` : ""}>
                        About
                        </a>
                    </Link>
                    <Link href="/">
                        <a onClick={closeNav}>
                            Booking
                        </a>
                    </Link>

                </span>
            </div>
        </div>
    )
}