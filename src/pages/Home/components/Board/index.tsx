import { useEffect, useMemo, useState } from 'react';

import CharacterCard from '../CharacterCard';
import styles from './board.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../redux/hook';
import { getCharacters } from '../../../../redux/actions';
import CustomPagination from '../Pagination';

const Board = () => {
  const { characters, infoResults } = useAppSelector(
    (state) => state.characters
  );
  const dispatch = useAppDispatch();

  // const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [pageAmount, setPageAmount] = useState<number>(0);

  useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(getCharacters(page));
    } catch (error) {
      throw new Error('Something go wrong...');
    }
  }, [dispatch, page]);

  useMemo(() => {
    const pages = infoResults?.pages;
    if (pages !== null && pages !== undefined) {
      setPageAmount(pages);
    }
  }, [infoResults?.pages]);

  return (
    <div className={styles.inner}>
      <div className={styles.characters__container}>
        {characters?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <CustomPagination pageAmount={pageAmount} page={page} setPage={setPage} />
    </div>
  );
};

export default Board;
