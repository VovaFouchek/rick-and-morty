/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getCharacterById } from '../../redux/actions';

import Loader from '../../components/Loader';
import Button from '../../components/Button';
import CharacterCard from '../Home/components/CharacterCard';

import styles from './details.module.scss';

const Details = () => {
  const dispatch = useAppDispatch();
  const { character, isLoading } = useAppSelector((state) => state.characters);
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(getCharacterById(id!));
  }, [dispatch, id]);

  localStorage.setItem('character', JSON.stringify(character));

  return (
    <div className={styles.inner}>
      <Button onClick={() => navigate(-1)}>Go home</Button>
      {isLoading ? (
        <Loader />
      ) : (
        <CharacterCard details character={character!} />
      )}
    </div>
  );
};

export default Details;
