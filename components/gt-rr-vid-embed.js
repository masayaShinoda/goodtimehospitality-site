import { useEffect } from "react"
import styles from '../styles/vid_embed.module.scss'

export default function GT_RR_Video() {
    
    return (
        <div className={styles.vid_embed_container}>
            <iframe 
            id="gt-rr-vid-iframe"
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fgoodtimerelaxresort%2Fvideos%2F460849948858093%2F&width=800&show_text=false&height=414&appId" 
            width="800" 
            height="414" 
            style={{border: `none`, overflow: `hidden`}} 
            scrolling="no" frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
            allowFullScreen={true}>
            </iframe>
        </div>
    )
}