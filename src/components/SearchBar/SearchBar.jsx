import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    const dataToSearch = e.target.search.value;

    if (dataToSearch.trim() === '') {
      toast.error('Please, enter search query', {
        duration: 2000,
      });
    }
    onSearch(dataToSearch);
    e.target.reset();
  }

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          className={css.searchInput}
        />
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
}
