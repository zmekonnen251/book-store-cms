import { Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import BookList from './components/BookList';
import Catagories from './pages/Catagories';
import NotMatch from './pages/NotMatch';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<BookList />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/catagories" element={<Catagories />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
}

export default App;
