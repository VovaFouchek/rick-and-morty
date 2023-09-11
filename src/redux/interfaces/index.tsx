import { Character, Info } from '../../shared/types';

export interface ICharactersReducer {
  character: Character | null;
  characters: Character[] | null;
  infoResults: Info;
  currentPage: number;
  isLoading: boolean | null;
  error?: string | null;
}
