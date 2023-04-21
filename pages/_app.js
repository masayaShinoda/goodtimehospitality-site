import { useEffect } from 'react'
import '../styles/reset.css'
import '../styles/globals.scss'
import 'animate.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    typeof window !== 'undefiend' && (
      AOS.init()
    )
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  ) 
}

export default MyApp
