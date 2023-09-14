/* eslint-disable @typescript-eslint/no-floating-promises */
import { Dispatch, SetStateAction, useState } from 'react';
import { TextField } from '@mui/material';

import Button from '../../../../components/Button';
import MultipleSelect, { MultipleSelectProps } from '../MultipleSelect';
import styles from './filter.module.scss';

interface FilterProps extends MultipleSelectProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  handleSubmit: () => void;
}

const Filter: React.FC<FilterProps> = ({
  query,
  setQuery,
  selectedType,
  setSelectedType,
  selectedParameter,
  setSelectedParameter,
  availableParameters,
  setAvailableParameters,
  handleSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleChecked = () => {
    if (isOpen) {
      setQuery('');
    }
    setIsOpen((value) => !value);
  };

  const buttonTitle = isOpen ? 'remove filter' : 'filter';

  return (
    <div className={styles.inner}>
      <Button onClick={handleToggleChecked}>{buttonTitle}</Button>

      {isOpen && (
        <>
          <MultipleSelect
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedParameter={selectedParameter}
            setSelectedParameter={setSelectedParameter}
            availableParameters={availableParameters}
            setAvailableParameters={setAvailableParameters}
            aria-hidden
          />
          <TextField
            sx={{
              maxWidth: '260px',
              width: '100%',
              margin: '0 30px',
              backgroundColor: '#fff',
            }}
            label="Add key words to find"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
          <Button onClick={handleSubmit}>Find</Button>
        </>
      )}
    </div>
  );
};

export default Filter;
