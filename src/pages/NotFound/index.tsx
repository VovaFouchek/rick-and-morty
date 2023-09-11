import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 401) {
    return (
      <div>
        <h1>{error.status}</h1>
      </div>
    );
  }
  return null;
};

export default NotFound;
