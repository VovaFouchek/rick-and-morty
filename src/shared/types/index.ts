type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';
type Status = 'Alive' | 'Dead' | 'unknown';

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Result<Data> {
  info: Info;
  results: Data[];
}

interface CharacterEntity {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: CharacterEntity;
  location: CharacterEntity;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
