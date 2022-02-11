import Link from 'next/link'
// import Image from 'next/image'
import logo from '../public/images/logo-goodtimegrouphospitality.png'
import styles from '../styles/nav.module.scss'
import { useEffect } from 'react'
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
    
    useEffect(() => {
        typeof window !== 'undefiend' && (
            // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
            window.onscroll = function() {scrollFunction()}       
        )
    }, [])

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("nav_container").classList.add(styles.navContainerMinimized)
            document.getElementById("nav_container").classList.add('animate__slideInDown')
            // document.getElementById("nav_container").style.height = "60px"
            document.getElementById("desktop_logo").src = "images/logo-text.png"
            document.getElementById("mobile_logo").src = "images/logo-text-white.png"
            document.getElementById("desktop_logo").style.width = "20rem"
            document.getElementById("desktop_logo").style.maxWidth = "20rem"
            document.getElementById("mobile_logo").style.width = "17.5rem"
            document.getElementById("mobile_logo").style.maxWidth = "17.5rem"

            document.getElementById("booking_link").classList.add(styles.minimizedBookingLink)
        } else {
            document.getElementById("nav_container").classList.remove(styles.navContainerMinimized)
            document.getElementById("nav_container").classList.remove('animate__slideInDown')
            // document.getElementById("nav_container").style.height = "120px"
            document.getElementById("desktop_logo").src = "images/logo-goodtimegrouphospitality.png"
            document.getElementById("mobile_logo").src = "images/logo-goodtimegrouphospitality.png"
            document.getElementById("desktop_logo").style.width = "10rem"
            document.getElementById("desktop_logo").style.maxWidth = "10rem"
            document.getElementById("mobile_logo").style.width = "10rem"
            document.getElementById("mobile_logo").style.maxWidth = "10rem"
            document.getElementById("booking_link").classList.remove(styles.minimizedBookingLink)

        }
    } 
    
    return (
    <div className={styles.navContainer + ` animate__animated animate__faster`} id="nav_container">
        <div className={styles.navContent}>
            <Link href="/">
                <a className={styles.logoLink}>
                    {/* <Image src={logo} width="100" height="100" alt="Logo" id="desktop_logo" /> */}
                    <img 
                    src="images/logo-goodtimegrouphospitality.png" 
                    alt="Good Time Group Logo" 
                    id="desktop_logo"
                    />
                </a>
            </Link>
            <span className={styles.navLinks} id="nav_links">
                <Link href="/">
                    <a className={router.pathname === "/" ? `${styles.active}` : ""}>
                    Home
                    </a>
                </Link>
                <div className={styles.dropdownNav}>
                    <a className={router.pathname === "/good-time-relax-resort" || router.pathname === "/good-time-boutique-hotel"  ||  router.pathname === "/resorts" ? `${styles.active}` : ""}>
                    Offerings
                    <div className={styles.dropdownContent}>
                        <Link href="/resorts">
                        <a className={styles.dropdownLink}>
                            Resorts
                            <div className={styles.dropdownLink_cascade}>
                                <ul>
                                    <li>
                                    <Link href="/good-time-relax-resort"><a>Good Time Relax Resort</a></Link>    
                                    </li>
                                    <li>
                                    <Link href="/good-time-boutique-hotel"><a>Good Time Boutique Hotel</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </a>
                        </Link>    
                        <Link href="/vacation-homes"><a>Vacation Homes</a></Link>    
                        <Link href="/apartments"><a>Apartments</a></Link>    
                    </div>
                    </a>
                </div>
                <Link href="/about">
                    <a className={router.pathname === "/about" ? `${styles.active}` : ""}>
                    About
                    </a>
                </Link>
                <a 
                className={styles.bookingLink} 
                id="booking_link"
                title="Booking"
                href="https://www.booking.com/hotel/kh/good-time-relax-resort.html"
                >
                    <img 
                    src="icons/phone_result.webp" 
                    className={styles.bookingLinkIcon}
                    width="18px" height="18px" />
                    <p>Booking</p>
                </a>
            </span>
        </div>
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
                <img 
                src="images/logo-goodtimegrouphospitality.png"
                alt="Logo" 
                width="100" height="100" 
                id="mobile_logo"
                />
                
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
                    <a onClick={closeNav} className={router.pathname === "/good-time-relax-resort" || router.pathname === "/good-time-boutique-hotel"  ||  router.pathname === "/resorts" ? `${styles.active}` : ""}>
                    Offerings
                    </a>
                </Link>
                <Link href="/about">
                    <a onClick={closeNav} className={router.pathname === "/about" ? `${styles.active}` : ""}>
                    About
                    </a>
                </Link>
                <a 
                href="https://www.booking.com/hotel/kh/good-time-relax-resort.html"
                onClick={closeNav}>
                Booking
                </a>
            </span>
        </div>
    </div>

    )
}