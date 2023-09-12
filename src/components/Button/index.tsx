import styles from './button.module.scss';

interface ButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      {label}
    </button>
  );
};

export default Button;
