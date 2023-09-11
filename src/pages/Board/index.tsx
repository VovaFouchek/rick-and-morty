/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getCharacters } from '../../redux/actions';

import CharacterCard from './components/CharacterCard';
import CustomPagination from './components/Pagination';
import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader';

import styles from './board.module.scss';

const Board = () => {
  const dispatch = useAppDispatch();
  const { characters, infoResults, currentPage, isLoading, error } =
    useAppSelector((state) => state.characters);

  // const [query, setQuery] = useState<string>('');

  useEffect(() => {
    dispatch(getCharacters(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div className={styles.inner}>
      <div className={styles.characters__container}>
        {characters?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <CustomPagination pageAmount={infoResults.pages} page={currentPage} />
      {isLoading && <Loader />}
      {!isLoading && error ? <ErrorMessage message={error} /> : null}
    </div>
  );
};

export default Board;
