import { Results } from '../../types';

export interface ImageGalleryTypes {
  pictures: Results[];
  openModal: (image: Results) => void;
}
