import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onLoadMoreBtnClick }) {
  return (
    <button className={css.loadMoreBtn} onClick={onLoadMoreBtnClick}>
      Load more
    </button>
  );
}
