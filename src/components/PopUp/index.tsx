import { Box, Modal } from '@mui/material';

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  position: 'absolute',
  top: '50%',
  right: 0,
  transform: 'translateY(-50%)',
  maxWidth: '420px',
  minHeight: '570px',
  width: '100%',
  bgcolor: '#fff',
  backdropFilter: 'blur(7px)',
  border: 'none',
  borderRadius: '9px 0px 0px 9px',
  boxShadow: 24,
  padding: '16px',
};

interface PopUpProps {
  onClose: () => void;
  openModal: boolean;
  children: React.ReactNode;
}

const PopUp: React.FC<PopUpProps> = ({ onClose, openModal, children }) => {
  return (
    <div>
      <Modal open={openModal} onClose={onClose}>
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};

export default PopUp;
