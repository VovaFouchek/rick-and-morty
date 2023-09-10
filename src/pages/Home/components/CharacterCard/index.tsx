import { Character } from '../../../../shared/types';
import s from './characterCard.module.scss';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
}): JSX.Element => {
  const checkIndicator = (): string => {
    if (character.status === 'Alive') {
      return s.green;
    }
    if (character.status === 'Dead') {
      return s.red;
    }
    return s.grey;
  };

  return (
    <div className={s.card}>
      <img
        src={character.image}
        alt={character.name}
        className={s.card__image}
      />
      <div className={s.card__wrap}>
        <strong className={s.card__title}>{character.name}</strong>
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
      </div>
    </div>
  );
};

export default CharacterCard;
