
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Notfound from './Notfound/Notfound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='*' element={<Notfound></Notfound>}></Route>
    </Routes>
  );
}

export default App;
