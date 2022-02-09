import styles from '../styles/footer.module.scss'

export default function Footer() {
    return (
<footer className={styles.footerContainer}>
	<div className={styles.content}>
		<div className={styles.top}>
			<div className={styles.logo_details}>
				<span className={styles.logo_name}>
                    <img 
                        style={{filter: `invert(1)`}}
                        src="/images/logo-text.png"
                        width="250"
                        alt="Good Time Group" 
					/>
                </span>
			</div>
			<div className={styles.media_icons}>
                
			</div>
		</div>
		<div className={styles.link_boxes}>
			<ul className={styles.box}>
				<li className={styles.link_name}>Good Time Hospitality Group</li>
				<li><a href="mailto:info@goodtimehospitality.com">info@goodtimehospitality.com</a></li>
				<li>
					<a href="https://www.facebook.com/Good-Time-Hospitality-Group-106046934410922">
					Facebook	
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/goodtimehospitalitygroup/">
					Instagram
					</a>
				</li>
			</ul>
			<ul className={styles.box}>
				<li className={styles.link_name}>Good Time Relax Resort</li>
				<li>
					<a href="https://www.facebook.com/Good-Time-Relax-Resort-111918520338184">
					Facebook	
					</a>
				</li>
				
				<li><a href="tel:+85599313535">099 313 535</a></li>
			</ul>	
			<ul className={styles.box}>
				<li className={styles.link_name}>Good Time Boutique Hotel</li>
				
				<li><a href="tel:+855964431575">096 443 1575</a></li>
				<li><a href="mailto:goodtime.resortkps@gmail.com">goodtime.resortkps@gmail.com</a></li>
			
			</ul>
	
		</div>
	</div>
	<div className={styles.bottom_details}>
      <div className={styles.bottom_text}>
        <span>
            <p>
            Copyright © 2021 Good Time Group Hospitality
            </p>
        </span>
      </div>
    </div>
</footer>
    )
}

