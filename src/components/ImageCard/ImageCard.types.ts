import { Results } from '../../types';

export interface ImageCardTypes {
  picture: Results;
  openModal: (image: Results) => void;
}
