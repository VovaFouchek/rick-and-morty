import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import HistoryIcon from '@mui/icons-material/History';

interface FabProps {
  handleOpenPopUp: () => void;
}

const Fab: React.FC<FabProps> = ({ handleOpenPopUp }) => {
  return (
    <Box
      sx={{
        zIndex: 5,
        height: 320,
        transform: 'translateZ(0px)',
        flexGrow: 1,
        position: 'absolute',
        right: 0,
        bottom: 0,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{
          position: 'absolute',
          bottom: '75px',
          right: '30px',
          '& .MuiFab-primary': { backgroundColor: 'white', color: '#3C3E44' },
        }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          icon={<HistoryIcon />}
          onClick={handleOpenPopUp}
          tooltipTitle="History"
        />

        <SpeedDialAction icon={<SaveAltIcon />} tooltipTitle="Save CSV" />
      </SpeedDial>
    </Box>
  );
};

export default Fab;
