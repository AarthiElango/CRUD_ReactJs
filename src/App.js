import { Button } from 'bootstrap';
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { img } from './Constants/URL';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <div className="app-container">
      <h2>EMPLOYEE LIST</h2>
     
      <a href='/create'>
      <img src={img} alt="My Logo" className="logo" />
      </a>
    
      <BrowserRouter>
        <Routes>
          
          <Route exact path='/' element={<Create />}/>
          <Route exact path='/create' element={<Create />}/>
          <Route exact path='/read' element={<Read />}/>
          <Route exact path='/update' element={<Update/>}/>
        </Routes>
      </BrowserRouter> 
      
    </div>
  );
}

export default App;