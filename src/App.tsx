import { useEffect, useState } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import './App.css';
import getArticles from './articles-api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageModal from './components/ImageModal/ImageModal';
import { Results } from './types';

function App() {
  const [newData, setNewData] = useState<Results[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [showBtn, setShowBtn] = useState<boolean | 0>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Results | null>(null);

  useEffect(() => {
    async function getPictures() {
      if (query.trim() === '') {
        return;
      }

      try {
        setLoader(true);
        setErrorMsg(false);
        const { results, total_pages } = await getArticles(query, page);
        setNewData(prevData => [...prevData, ...results]);
        setShowBtn(total_pages && total_pages !== page);
      } catch (error) {
        setErrorMsg(true);
      } finally {
        setLoader(false);
      }
    }
    getPictures();
  }, [query, page]);

  function handleSearch(searchQuery: string): void {
    setNewData([]);
    setQuery(searchQuery);
    setPage(1);
  }

  function onLoadMoreBtnClick(): void {
    setPage(page + 1);
  }

  function openModal(image: Results): void {
    setModalImage(image);
    setIsModalOpen(true);
  }

  function closeModal(): void {
    setModalImage(null);
    setIsModalOpen(false);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {errorMsg ? (
        <ErrorMessage />
      ) : (
        <ImageGallery pictures={newData} openModal={openModal} />
      )}
      {loader && (
        <MagnifyingGlass color="rgb(24, 24, 147)" glassColor="yellow" />
      )}
      {showBtn && <LoadMoreBtn onLoadMoreBtnClick={onLoadMoreBtnClick} />}
      {isModalOpen && modalImage !== null && (
        <ImageModal
          onRequestClose={closeModal}
          isOpen={isModalOpen}
          fullSrc={modalImage.urls.regular}
          alt={modalImage.alt_description}
        />
      )}
    </>
  );
}

export default App;
