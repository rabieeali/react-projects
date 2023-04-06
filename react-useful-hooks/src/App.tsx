import useAxios from './hooks/useAxios';

const App = () => {
  const { data, error, isLoading } = useAxios({
    method: 'GET',
    url: `https://jsonplaceholder.typicode.com/users`,
    headers: { 'Content-Type': 'application/json' },
  });

  return (
    <>
      <h1>React Useful Hooks (with Typescript) checkout hooks folder</h1>

      <div>
        {error && <p>Oops! an error happened!</p>}
        {isLoading && <p>Loading ...</p>}
        {data && data.map((u: { id: number; name: string }) => <p key={u.id}>{u.name}</p>)}
      </div>
    </>
  );
};

export default App;
