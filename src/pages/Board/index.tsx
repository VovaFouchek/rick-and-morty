/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getCharacters } from '../../redux/actions';

import CharacterCard from './components/CharacterCard';
import CustomPagination from './components/Pagination';
import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader';

import Filter from '../../layouts/Filter';
import styles from './board.module.scss';

const Board = () => {
  const dispatch = useAppDispatch();
  const { characters, infoResults, currentPage, isLoading, error } =
    useAppSelector((state) => state.characters);

  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedParameter, setSelectedParameter] = useState<string>('');
  const [availableParameters, setAvailableParameters] = useState<string[]>([]);
  const [queryValue, setQueryValue] = useState<string>('');

  useEffect(() => {
    dispatch(getCharacters(currentPage));
  }, [dispatch, currentPage]);

  // todo: Реалізація фільтрації за допомогою query параметрів та запиту на бек
  // todo: Виникла помилка в проекті, через яку, на жаль, не зміг реалізувати фічу
  // const handleSubmit = useCallback(async () => {
  //   await dispatch(
  //     getCharactersByValue({
  //       page: currentPage,
  //       type: selectedType,
  //       parameters: selectedParameter,
  //       query: queryValue,
  //     })
  //   );
  // }, [dispatch, currentPage, selectedType, selectedParameter, queryValue]);

  // useEffect(() => {
  //   handleSubmit();
  // }, [handleSubmit]);

  return (
    <div className={styles.inner}>
      <Filter
        query={queryValue}
        setQuery={setQueryValue}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedParameter={selectedParameter}
        setSelectedParameter={setSelectedParameter}
        availableParameters={availableParameters}
        setAvailableParameters={setAvailableParameters}
      />
      {/* <Button label="Find" onClick={handleSubmit} /> */}
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
