import { Button } from '@mui/material';

import { getStorageData } from '../../../../helpers';
import { Character } from '../../../../shared/types';
import styles from './popUpContent.module.scss';

interface PopUpContentProps {
  onClose: () => void;
}

const PopUpContent: React.FC<PopUpContentProps> = ({ onClose }) => {
  const getCharacterData: Character = getStorageData('character');
  const getFilterTypesData: string[] = getStorageData('filterTypes');

  return (
    <>
      <div>
        <h3 className={styles.title}>History</h3>
        <p className={styles.subtitle}>Character:</p>
        <p className={styles.text}>
          {getCharacterData ? getCharacterData?.name : 'unknown'}
        </p>
        <p className={styles.subtitle}>Search criteria:</p>
        <p className={styles.text}>
          {getFilterTypesData ? getFilterTypesData[0] : 'unknown'}
        </p>
        <p className={styles.text}>
          {getFilterTypesData ? getFilterTypesData[1] : 'unknown'}
        </p>
      </div>
      <Button onClick={onClose}>Close</Button>
    </>
  );
};

export default PopUpContent;
