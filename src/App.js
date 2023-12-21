import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import CreatePerson from './components/CreatePerson';
import ListPerson from './components/ListPerson';
import EditPerson from './components/EditPerson';
function App() {
  return (
    <div className="App">
        <h1>React CRUD operations using PHP API and MySQL</h1>

        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">List Person</Link>
              </li>
              <li>
                <Link to="person/create">Create Person</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="person/:id/edit" element={<EditPerson />} /> 
            <Route index element={<ListPerson />} />
            <Route path="person/create" element={<CreatePerson />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
