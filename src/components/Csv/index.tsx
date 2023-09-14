import { CSVLink } from 'react-csv';

import styles from './csv.module.scss';
import { Character } from '../../shared/types';

interface CsvProps {
  data: Character[];
  children: React.ReactNode;
}

const Csv = ({ data, children }: CsvProps) => {
  return (
    data && (
      <CSVLink
        data={data}
        filename="my-file.csv"
        className={styles.csv}
        target="_blank"
      >
        {children}
      </CSVLink>
    )
  );
};

export default Csv;
