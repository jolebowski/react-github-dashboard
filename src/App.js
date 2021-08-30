import SearchField from './components/SearchField';
function App() {
  return (
    <>
      <div className='flex flex-col h-screen'>
        <header className='py-5 bg-blue-400 text-white text-center'>
          Github Dashboard Sample
        </header>
        <SearchField />
      </div>
    </>
  );
}

export default App;
