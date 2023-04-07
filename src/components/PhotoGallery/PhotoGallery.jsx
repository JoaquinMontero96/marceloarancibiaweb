import React, { useEffect, useState } from 'react';
import './PhotoGallery.css';

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import photos from "../../data/photos";
import slides from "../../data/slides";
import Subtitle from '../Subtitle/Subtitle';

const PhotoGallery = () => {
  const [index, setIndex] = useState(-1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(()=>{
    function actualizarWindowWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", actualizarWindowWidth);
    return () => window.removeEventListener("resize", actualizarWindowWidth);
  }, []);

  return (
    <div id='galeria'>
      <Subtitle text={'GALERÍA DE IMÁGENES'} />
      <div className='galleryContainer' data-aos='fade-up' data-aos-duration="1000">
        <PhotoAlbum
          layout="masonry"
          photos={photos}
          columns={windowWidth > 1024 ? 3 : windowWidth > 768 ? 2 : 1}
          spacing={16}
          onClick={({ index }) => setIndex(index)}
        />
      </div>

      <Lightbox
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </div>
  );
};

export default PhotoGallery;