import { Pagination, Stack, styled } from '@mui/material';
import styles from './pagination.module.scss';

interface PaginationProps {
  pageAmount: number;
  page: number;
  setPage: (value: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({
  pageAmount,
  page,
  setPage,
}) => {
  const MyPagination = styled(Pagination)({
    '& .Mui-selected': {
      backgroundColor: '#F5F5F5 !important',
      color: '#202329 !important',
    },
    '& .MuiPaginationItem-root': {
      width: '32px',
      height: '32px',
      borderRadius: '5px',
      color: '#F5F5F5',
      backgroundColor: '#3C3E44',
      boxShadow:
        '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 1px 0px rgba(0, 0, 0, 0.20)',
    },
  });

  return (
    <div className={styles.inner}>
      {/* <TextField
    fullWidth
    label="Search..."
    value={query}
    onChange={(event) => {
      setQuery(event.target.value);
    }}
  /> */}
      <div className={styles.pagination}>
        <Stack spacing={2}>
          {!!pageAmount && (
            <MyPagination
              count={pageAmount}
              page={page}
              onChange={(_, number) => {
                setPage(number);
              }}
              variant="outlined"
              shape="rounded"
              sx={{ justifyContent: 'center' }}
            />
          )}
        </Stack>
      </div>
    </div>
  );
};

export default CustomPagination;
