/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useNavigate } from 'react-router-dom';
import { Character } from '../../../../shared/types';
import s from './characterCard.module.scss';

interface CharacterCardProps {
  character: Character;
  details?: boolean;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  details,
}): JSX.Element => {
  const navigate = useNavigate();

  const checkIndicator = (): string => {
    if (character.status === 'Alive') {
      return s.green;
    }
    if (character.status === 'Dead') {
      return s.red;
    }
    return s.grey;
  };

  const changeStylesForDetails = () => {
    if (details) {
      return s.detailCard;
    }
    return '';
  };

  const handleNavigate = (): void => navigate(`/${character.id}`);

  return (
    <div className={`${s.card} ${changeStylesForDetails()}`}>
      <img
        src={character.image}
        alt={character.name}
        className={`${s.card__image} ${changeStylesForDetails()}`}
      />

      <div className={s.card__wrap}>
        <strong onClick={handleNavigate} className={s.card__title}>
          {character.name}
        </strong>
        <div className={s.card__status}>
          <p className={`${s.card__indicator} ${checkIndicator()}`} />
          <p>
            {character.status} - {character.species}
          </p>
        </div>
        <span className={s.card__subtitle}>Last known location:</span>
        <p className={s.card__text}>{character.location.name}</p>
        <span className={s.card__subtitle}>First seen in:</span>
        <p className={s.card__text}>{character.origin.name}</p>
        {details && (
          <>
            <span className={s.card__subtitle}>Other Info</span>
            <p className={s.card__text}>{character.gender}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
