import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import sections from "./Photos";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from './CustomAccordion';
const GallerySection = ({gallery}) => {
    const [galleryReadySections, setGalleryReadySections] = useState(null);
    const [index, setIndex] = useState(-1);
    const [openSection, setOpenSection] = useState(null);
    sections.then(response => {
        let galleryReady = {};
        if(response.data.success) {
          galleryReady = response.data.response
        } else{
          console.log("Error: " + response.data.response)
          console.log(response.data)
        }
        setGalleryReadySections(galleryReady);
      })
    useEffect(() => {
        if(galleryReadySections) {
            console.log(galleryReadySections)
        }
    }, [galleryReadySections])
    return (
        <div ref={gallery} className="h-fit text-white my-4">
            {/* Create an accordion for each section in sections */}
            {/* Inform the user if loading is happening */}
            {galleryReadySections ?
                Object.keys(galleryReadySections).map(section => {
                return (
                    <Accordion key={section} onClick={() => setOpenSection(section)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon color="white"/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h6">{section}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <PhotoAlbum
                            photos={galleryReadySections[section]}
                            layout="rows"
                            targetRowHeight={150}
                            onClick={(event, photo, index) => {
                                setIndex(index)
                                }
                            }
                        />
                        </AccordionDetails>
                    </Accordion>
                )
            }
            ) : <Typography variant="h6">Loading...</Typography>}
            { openSection !== null && <Lightbox
                slides={galleryReadySections[openSection]}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            /> }
        </div>
    );
}

export default GallerySection;