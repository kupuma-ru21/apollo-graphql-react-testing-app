import { useForm } from './useForm';

const Home = () => {
  const { loading, error, repositories, pageInfo, prevPage, nextPage } =
    useForm();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div data-testid="hoge">
      <ul>
        {repositories?.map((repository: any) => {
          const { name } = repository.node;
          return <li key={name}>{name}</li>;
        })}
      </ul>
      {pageInfo?.hasPreviousPage && (
        <button onClick={() => prevPage()}>prevPage</button>
      )}
      {pageInfo?.hasNextPage && (
        <button onClick={() => nextPage()}>nextPage</button>
      )}
    </div>
  );
};

export default Home;
