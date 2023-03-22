import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error= useRouteError();
  return (
    <>
      <h1>Error Page</h1>
{console.log(error)}
      <h2> {error.status}  </h2>
       <h2>{error.statusText}</h2>
     <h1>{error.data}</h1>
    </>
  );
};
export default ErrorPage;