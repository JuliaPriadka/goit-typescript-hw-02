import { FC } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { ImageGalleryTypes } from './ImageGallery.types';

const ImageGallery: FC<ImageGalleryTypes> = ({ pictures, openModal }) => {
  return (
    <ul className={css.gallery}>
      {pictures.map(picture => (
        <li key={picture.id}>
          <ImageCard picture={picture} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
