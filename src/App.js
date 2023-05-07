import logo from './logo.svg';
import './App.css';
import Signin from './component/Signin';
import Signup from './component/Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Page from './component/Page';

function App() {
  return (
    <BrowserRouter>
<Routes> 
<Route path='/' element={<Signup />}/>
  <Route path='/signin' element={<Signin />}/>
  <Route path='/page' element={<Page />}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
