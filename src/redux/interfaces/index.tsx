import { Character, Info } from '../../shared/types';

export interface ICharactersReducer {
  characters: Character[] | null;
  infoResults: Info | null;
  loading: boolean | null;
  error: string | null;
}
