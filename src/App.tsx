import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import NotFound from './pages/NotFound';
import Details from './pages/Details';
import Board from './pages/Board';
import Layout from './layouts/Layout';
import ROUTERS from './constants/routers';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path={ROUTERS.HOME}
        element={<Layout />}
        errorElement={<NotFound />}
      >
        <Route index element={<Board />} />
        <Route path={ROUTERS.ID} element={<Details />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
