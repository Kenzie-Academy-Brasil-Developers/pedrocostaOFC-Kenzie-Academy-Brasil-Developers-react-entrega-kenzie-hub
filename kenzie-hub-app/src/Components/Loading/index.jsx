import CircleLoader from "react-spinners/CircleLoader";

export const Loading = () => {
  return (
    <>
      <h1>Carregando</h1>
      <CircleLoader color="#ff5757" size={100} speedMultiplier={5} />
    </>
  );
};
