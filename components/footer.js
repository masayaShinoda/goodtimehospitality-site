import styles from '../styles/footer.module.scss'

export default function Footer() {

const tripadvisor_link = "https://www.tripadvisor.com/Hotel_Review-g21367060-d23821043-Reviews-Good_Time_Relax_Resort-Kampong_Kraeng_Kampot_Province.html?m=19905"
const agoda_link = "https://www.agoda.com/good-time-relax-resort/hotel/kampot-kh.html"
const booking_link = "https://www.booking.com/hotel/kh/good-time-relax-resort.html"


return (
	<footer className={styles.footerContainer}>
		<div className={styles.content}>
			<div className={styles.top}>
				<div className={styles.logo_details}>
					<span className={styles.logo_name}>
						<img 
							style={{filter: `invert(1)`}}
							src="images/logo-text.png"
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
					<li>
						<a href="https://www.instagram.com/goodtime.relaxresort/">
						Instagram	
						</a>
					</li>			
					<li>
						<a href={booking_link}>
						Booking.com	
						</a>
					</li>			
					<li>
						<a href={agoda_link}>
						Agoda
						</a>
					</li>
					<li>
						<a href={tripadvisor_link}>
						Tripadvisor
						</a>
					</li>			
					<li><a href="tel:+85599313535">099 313 535</a></li>
				</ul>	
				<ul className={styles.box}>
					<li className={styles.link_name}>Good Time Boutique Hotel</li>
					<li><a href="mailto:goodtime.resortkps@gmail.com">goodtime.resortkps@gmail.com</a></li>
					<li><a href="tel:+855964431575">096 443 1575</a></li>
				</ul>
		
			</div>
		</div>
		<div className={styles.bottom_details}>
		<div className={styles.bottom_text}>
			<span>
				<p>
				Copyright © 2022 Good Time Hospitality Group
				</p>
			</span>
		</div>
		</div>
	</footer>
    )
}