/* eslint-disable @typescript-eslint/no-floating-promises */
import { Dispatch, SetStateAction, useState } from 'react';
import { TextField } from '@mui/material';

import Button from '../../components/Button';
import styles from './filter.module.scss';
import MultipleSelect, {
  MultipleSelectProps,
} from '../../components/MultipleSelect';

interface FilterProps extends MultipleSelectProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
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
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleChecked = () => setIsOpen((value) => !value);

  return (
    <div className={styles.inner}>
      <Button
        label={isOpen ? 'remove filter' : 'filter'}
        onClick={handleToggleChecked}
      />

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
        </>
      )}
    </div>
  );
};

export default Filter;
