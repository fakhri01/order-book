import './App.css';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  let month = 'İyul'
  let year = 2023
  return (
    <div className="App">
      {Array.from(Array(1), (e, i) => {
        return <>
          <Header month={month} day={i+1} year={year} />
          <Table />
        </>
      })}
    </div>
  );
}

export default App;
