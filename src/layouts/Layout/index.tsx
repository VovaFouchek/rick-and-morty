import { Outlet } from 'react-router-dom';
import { lazy, useState } from 'react';

import NavBar from '../NavBar';
import Banner from '../Banner';
import rickAndMorty from '../../assets/rick-morty-grey.svg';
import PopUpContent from '../../pages/Home/components/PopUpContent';

import s from './layout.module.scss';
import { useAppSelector } from '../../redux/hook';

const PopUpComponent = lazy(() => import('../../components/PopUp'));
const FabComponent = lazy(() => import('../../components/Fab'));

const Layout = () => {
  const [openModal, setOpenModal] = useState(false);

  const { isLoading } = useAppSelector((state) => state.characters);

  const handleOpenPopUp = () => setOpenModal(true);
  const handleClosePopUp = () => setOpenModal(false);

  return (
    <div className={s.inner}>
      <NavBar />
      <Banner title="The Rick and Morty API" imagePath={rickAndMorty} />
      <div>
        {/* <CSVLink data={characters}>Download me</CSVLink>; */}
        {!isLoading && <FabComponent handleOpenPopUp={handleOpenPopUp} />}
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
