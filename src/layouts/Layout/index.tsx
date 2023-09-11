import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';
import Banner from '../Banner';
import rickAndMorty from '../../assets/rick-morty-grey.svg';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Banner title="The Rick and Morty API" imagePath={rickAndMorty} />
      <main>
        <Outlet />
      </main>
      <footer />
    </>
  );
};

export default Layout;
