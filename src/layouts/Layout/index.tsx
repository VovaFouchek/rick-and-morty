import { Outlet } from 'react-router-dom';
import { lazy, useState } from 'react';

import NavBar from '../NavBar';
import Banner from '../Banner';
import rickAndMorty from '../../assets/rick-morty-grey.svg';
import PopUpContent from '../../pages/Home/components/PopUpContent';
import Fab from '../../components/Fab';

import s from './layout.module.scss';

const PopUpComponent = lazy(() => import('../../components/PopUp'));

const Layout = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenPopUp = () => setOpenModal(true);
  const handleClosePopUp = () => setOpenModal(false);

  return (
    <div className={s.inner}>
      <NavBar />
      <Banner title="The Rick and Morty API" imagePath={rickAndMorty} />
      <div>
        {/* <CSVLink data={characters}>Download me</CSVLink>; */}
        <Fab handleOpenPopUp={handleOpenPopUp} />
      </div>
      <PopUpComponent onClose={handleClosePopUp} openModal={openModal}>
        <PopUpContent onClose={handleClosePopUp} />
      </PopUpComponent>
      <main>
        <Outlet />
      </main>
      <footer />
    </div>
  );
};

export default Layout;
