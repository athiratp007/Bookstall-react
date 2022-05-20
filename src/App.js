import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './Components/Add';
import View from './Components/View';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
<Route path='/'exact element={<Login/>}/>
  <Route path='/register'exact element={<Register/>}/>
  <Route path='/add'exact element={<Add/>}/>
  <Route path='/view'exact element={<View/>}/>
  
  
</Routes>
</BrowserRouter>
 
    </div>
    
  );
}

export default App;
