import './App.css';
import Person from './components/Person'

function App() {
  console.log('GoGo')
  const showPerson = true;
  return (
    <div className="App">
      {showPerson ? (
      <>
        <Person />
        <Person />
        <Person />
      </>

      ) : (
        <p>Not see noting</p>
      )}
    </div>
  );
}

export default App;
