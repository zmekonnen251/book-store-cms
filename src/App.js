import { Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import BookList from './components/BookList';
import Books from './pages/Books';
import Catagories from './pages/Catagories';
import NotMatch from './pages/NotMatch';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<BookList />} />
        <Route path="/books" element={<Books />} />
        <Route path="/catagories" element={<Catagories />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
}

export default App;
