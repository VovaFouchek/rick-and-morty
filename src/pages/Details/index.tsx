/* eslint-disable @typescript-eslint/no-floating-promises */
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getCharacterById } from '../../redux/actions';
import CharacterCard from '../Board/components/CharacterCard';
import styles from './details.module.scss';
import Loader from '../../components/Loader';

const Details = () => {
  const { character, isLoading } = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(getCharacterById(id!));
  }, [dispatch, id]);

  return (
    <>
      <button type="button" onClick={() => navigate(-1)}>
        BACK!!!
      </button>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.inner}>
          <CharacterCard details character={character!} />
        </div>
      )}
    </>
  );
};

export default Details;
