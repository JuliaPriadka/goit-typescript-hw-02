import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { SearchBarTypes } from './SearchBar.types';
import { FC, FormEvent } from 'react';

const SearchBar: FC<SearchBarTypes> = ({ onSearch }) => {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const dataToSearch = target.search.value;

    if (dataToSearch.trim() === '') {
      toast.error('Please, enter search query', {
        duration: 2000,
      });
    }
    onSearch(dataToSearch);
    target.reset();
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
};

export default SearchBar;
