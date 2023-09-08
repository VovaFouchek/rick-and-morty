import styles from './banner.module.scss';

interface BannerProps {
  title: string;
  imagePath: string;
}

const Banner = ({ title, imagePath }: BannerProps) => {
  return (
    <section className={styles.banner}>
      <h1 className={styles.title}>{title}</h1>
      <img src={imagePath} className={styles.image} alt={title} />
    </section>
  );
};

export default Banner;
