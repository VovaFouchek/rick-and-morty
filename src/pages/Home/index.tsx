// import styles from './home.module.scss';

import Banner from '../../layouts/Banner';
import NavBar from '../../layouts/NavBar';
import rickAndMorty from '../../assets/rick-morty-grey.svg';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner title="The Rick and Morty API" imagePath={rickAndMorty} />
    </div>
  );
};

export default Home;
