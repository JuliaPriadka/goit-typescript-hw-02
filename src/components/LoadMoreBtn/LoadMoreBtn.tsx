import { FC } from 'react';
import css from './LoadMoreBtn.module.css';
import { LoadMoreBtnTypes } from './LoadMoreBtn.types';

const LoadMoreBtn: FC<LoadMoreBtnTypes> = ({ onLoadMoreBtnClick }) => {
  return (
    <button className={css.loadMoreBtn} onClick={onLoadMoreBtnClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
