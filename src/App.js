import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Category from './pages/category';
import Detail from './pages/detail';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/category' element={<Category/>} />
          <Route path='/detail/:idMeal' element={<Detail/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
