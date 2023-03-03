import React, { useState } from 'react';

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import photos from "../../data/photos";
import slides from "../../data/slides";

const PhotoGallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        layout="masonry"
        photos={photos}
        columns={1}
        // targetRowHeight={150}
        padding={10}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
};

export default PhotoGallery;