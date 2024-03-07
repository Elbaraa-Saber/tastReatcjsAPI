import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Prodects from './Pages/Prodects';
import AddProdect from './Pages/AddProdect';
import Prodectdetails from './Pages/Prodectdetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='row'>
        <div className='col-2 sidebar'>
          <Sidebar/>
        </div>
        <div className='col-10'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='prodects' element={ <Prodects/> } />
            <Route path='prodects/add' element={<AddProdect/>} />
            <Route path='prodects/:prodectID' element={<Prodectdetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
