import { useState, useCallback } from 'react'
import Image from 'next/image'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";

import Zoom from 'react-medium-image-zoom'

import 'react-tabs/style/react-tabs.css'
import styles from '../styles/custom_react_tabs.module.scss'

export default function BungalowsTabs() {
  
    const [tabIndex, setTabIndex] = useState(0);

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    const fallback_bg = '/images/gt-rr/bungalow/SRN09142_result_result.jpg'
    const content = [
        {
            name: "Bungalow",
            desc: "Surrounded by the nature, its balcony is a plus on top of its design for a maximum comfort while offering view or partial view to the lake. The inviting wooden bridge just right in the front will naturally attract you to have a short walk for a healthier life.",
            bg: '/images/gt-rr/bungalow/SRN09142_result_result.jpg',
            photos: [
                {
                    src: '/images/gt-rr/bungalow/SRN09142_result.webp',
                    width: 3, height: 2
                },
                {
                    src: '/images/gt-rr/bungalow/DSC08897_result.webp',
                    width: 3, height: 2
                },
                {
                    src: '/images/gt-rr/bungalow/SRN07153_result.webp',
                    width: 4, height: 3
                },
                {
                    src: '/images/gt-rr/bungalow/DSC08912_result.webp',
                    width: 4, height: 3
                },
                {
                    src: '/images/gt-rr/bungalow/SRN07314_result.webp',
                    width: 4, height: 3
                }
            ]
        },
        {
            name: "Sweet Bungalow",
            desc: "Provides excellent quality of relaxation with a front balcony attached to the natural Kampot River and a large balcony at the back viewing the lake, the poolside as well as the nicest sunset of Bokor Mountain while ultimately ensuring a high quality of sleep with fine amenities set up.",
            bg: "/images/gt-rr/sweet-bungalow/DSC08879_result.jpg",
            photos: [
                {
                    src: '/images/gt-rr/sweet-bungalow/DSC08879_result.webp',
                    width: 3, height: 2
                },
                {
                    src: '/images/gt-rr/sweet-bungalow/IMG_8433_result.webp',
                    width: 3, height: 2
                },
                {
                    src: '/images/gt-rr/sweet-bungalow/SRN07062_result.webp',
                    width: 4, height: 3
                },
                {
                    src: '/images/gt-rr/sweet-bungalow/DSC08869_result.webp',
                    width: 3, height: 4
                },
                {
                    src: '/images/gt-rr/sweet-bungalow/DSC08867_result.webp',
                    width: 3, height: 4
                },
            ]
        },
        {
            name: "Pool View Bungalow",
            desc: "Not only does it offer a view to the pool from its spacious balcony at the back, the front one is also a plus where guests can take advantage from the natural environment. The long wooden bridge right in the front would invite you to take a walk while absorbing fresh air to live healthier.",
            bg: "/images/gt-rr/pool-view-bungalow/SRN07349_result.jpg",
            photos: [
                {
                    src: '/images/gt-rr/pool-view-bungalow/SRN07349_result.webp',
                    width: 3, height: 2
                },
                {
                    src: '/images/gt-rr/pool-view-bungalow/SRN07136_result.webp',
                    width: 3, height: 2
                },
                {
                    src: '/images/gt-rr/pool-view-bungalow/SRN09120-edit_result.webp',
                    width: 3, height: 2
                },
                // {
                //     src: '/images/gt-rr/pool-view-bungalow/DSC08890_result.webp',
                //     width: 1, height: 1
                // },
                // {
                //     src: '/images/gt-rr/pool-view-bungalow/DSC09775_result.webp',
                //     width: 3, height: 2
                // },
                {
                    src: '/images/gt-rr/pool-view-bungalow/SRN07080_result.webp',
                    width: 1, height: 1
                },
            ]
        },
        {
            name: "Grand Bungalow",
            desc: "With a grand balcony offering views to the lake, the mountain and a partial view to the pool, each room is equipped with good facilities while the overall comfort of guest is our focus. Just a few step to the poolside bar or poolside sunset bar for your pleasurable moments.",
            bg: "/images/gt-rr/grand-bungalow/SRN07350_result.jpg",
            photos: [
                {
                    src: '/images/gt-rr/grand-bungalow/SRN07350_result.webp',
                    width: 3, height:  2
                },
                {
                    src: '/images/gt-rr/grand-bungalow/IMG_8435_result.webp',
                    width: 1, height:  1
                },
                // {
                //     src: '/images/gt-rr/grand-bungalow/SRN07285_result.webp',
                //     width: 3, height: 2
                // },
                {
                    src: '/images/gt-rr/grand-bungalow/SRN07369-cropped_result.webp',
                    width: 3, height: 2
                },
                {
                    src: '/images/gt-rr/grand-bungalow/DSC08908_result.webp',
                    width: 3, height: 2
                },
                // {
                //     src: '/images/gt-rr/grand-bungalow/SRN07278_result.webp',
                //     width: 3, height: 2
                // },
            ]
        },
        {
            name: "Deluxe Bungalow",
            desc: "The two-balcony bungalow will allow you to start a new fresh day with a pleasant lake view and a beautiful sunrise while simply opening your window.",
            bg: "/images/gt-rr/deluxe-bungalow/DSC08905_result.jpg",
            photos: [
                // {
                //     src: '/images/gt-rr/deluxe-bungalow/DSC08896_result.webp',
                //     width: 4, height: 5,
                // },
                {
                    src: '/images/gt-rr/deluxe-bungalow/DSC08905_result.webp',
                    width: 3, height: 2,
                },
                {
                    src: '/images/gt-rr/deluxe-bungalow/SRN09150_result.webp',
                    width: 3, height: 2,
                },
                {
                    src: '/images/gt-rr/deluxe-bungalow/SRN09148_result.webp',
                    width: 3, height: 2,
                },
                {
                    src: '/images/gt-rr/deluxe-bungalow/DSC08901_result.webp',
                    width: 3, height: 4,
                },
            ]
        }
    ]

return (
 <Tabs 
 className={styles.tabs}
 selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}
 >
    <TabList>
        {content.map(i => <Tab key={i.name}>{i.name}</Tab>)}
    </TabList>
    {content.map(i => <TabPanel key={i.name}>
        <div className={styles.tab_panel_bg} style={i.bg ? {backgroundImage: `url(${i.bg})`} : {backgroundImage: `url(${fallback_bg})`}} />
        <div className={styles.tab_panel_bg_filter} />
        <div className={styles.tab_panel_content}>
            <span data-aos="fade-right" data-aos-duration="500">
            <h3>{i.name}</h3>
            <p>{i.desc}</p>
            </span>
            {i.photos ?
                <div className={styles.tab_panel_gallery_container} 
                data-aos="fade-left" data-aos-delay="150" data-aos-duration="500">
                <Gallery photos={i.photos} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                        currentIndex={currentImage}
                        views={i.photos.map(x => ({
                            ...x,
                            srcset: x.srcSet,
                            caption: x.title
                        }))}
                        />
                    </Modal>
                    ) : null}
                </ModalGateway>
                </div>            
            : null}
            {/* <div className={styles.tab_panel_photos}>
                {i.photos ? i.photos.map(photo => 
                <Zoom aria-hi="yes" zoomMargin={15} overlayBgColorEnd="rgba(247, 240, 182, .25)" key={photo.src}> 
                    <img
                    src={photo.src} 
                    width="100%" height="100%" loading="lazy"
                    alt={i.name + ' photo'} />
                </Zoom>)
                : null}
            </div> */}
        </div>
        </TabPanel>)}
  </Tabs>
)
}