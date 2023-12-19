import './App.css';
import Person from './components/Person'

function App() {
  const showPerson = true;
  return (
    <div className="App">
      {showPerson ? (
      <>
        <Person name="Eric" />
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
