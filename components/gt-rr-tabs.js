import { useState, useCallback } from 'react'
// import Image from 'next/image'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Carousel, { Modal, ModalGateway } from "react-images"
import Gallery from "react-photo-gallery"

// import Zoom from 'react-medium-image-zoom'

import 'react-tabs/style/react-tabs.css'
import styles from '../styles/custom_react_tabs.module.scss'

export default function GT_RR_Tabs({ content, fallback_bg }) {
  
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
        </div>
        </TabPanel>)}
  </Tabs>
)
}