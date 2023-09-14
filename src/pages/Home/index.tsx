/* eslint-disable @typescript-eslint/no-floating-promises */
import { useCallback, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getCharacters, getCharactersByValue } from '../../redux/actions';

import CharacterCard from './components/CharacterCard';
import CustomPagination from './components/Pagination';
import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader';
import Filter from './components/Filter';

import styles from './home.module.scss';

const Home = () => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedParameter, setSelectedParameter] = useState<string>('');
  const [availableParameters, setAvailableParameters] = useState<string[]>([]);
  const [queryValue, setQueryValue] = useState<string>('');

  const dispatch = useAppDispatch();

  const { characters, infoResults, currentPage, isLoading, error } =
    useAppSelector((state) => state.characters);

  useEffect(() => {
    if (queryValue === '') {
      dispatch(getCharacters(currentPage));
    }
  }, [dispatch, currentPage, queryValue]);

  const handleSubmit = useCallback(() => {
    if (queryValue !== '' && selectedType !== '') {
      dispatch(
        getCharactersByValue({
          page: currentPage,
          type: selectedType,
          parameters: selectedParameter,
          query: queryValue,
        })
      );
    }

    localStorage.setItem(
      'filterTypes',
      JSON.stringify([selectedType, selectedParameter])
    );
  }, [dispatch, currentPage, selectedType, selectedParameter, queryValue]);

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
        handleSubmit={handleSubmit}
      />
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

export default Home;
