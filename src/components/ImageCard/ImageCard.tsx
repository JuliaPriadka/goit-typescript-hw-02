import { FC } from 'react';
import css from './ImageCard.module.css';
import { ImageCardTypes } from './ImageCard.types';

const ImageCard: FC<ImageCardTypes> = ({ picture, openModal }) => {
  return (
    <div className={css.galleryItem}>
      <img
        src={picture.urls.small}
        alt={picture.alt_description}
        className={css.galleryImg}
        onClick={() => openModal(picture)}
      />
    </div>
  );
};

export default ImageCard;
