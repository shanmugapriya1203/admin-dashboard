
import './App.css';
import "./sb-admin-2.min.css"
import DashBoard from './DashBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Portal from './Portal';
import Table from './Table';
import UserView from './UserView';
import Form from './Form';
import Charts from './Charts';
import Buttons from './Buttons';
import Cards from './Cards';
import Colorss from './Colorss';
import Border from './Border';
import Animation from './Animation';
import Register from './Register';
import Forgot from './Forgot';
import Error from './Error';
import Blank from './Blank';




function App() {
  return (<>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='register' element={<Register/>}/>
  <Route path='/forgot' element={<Forgot/>}/>
<Route path='/portal' element={<Portal/>}>
    
<Route path='dashboard' element={<DashBoard/>}/>

  <Route path='table' element={<Table/>}/>
  <Route path='user-view/:id' element={<UserView/>}/>
  <Route path='form' element={<Form/>}/>
  <Route path='charts' element={<Charts/>}/>
  <Route path='buttons'element={<Buttons/>}/>
  <Route path='cards' element={<Cards/>}/>
  <Route path='colors' element={<Colorss/>}/>
  <Route path='borders' element={<Border/>}/>
  <Route path='animations' element={<Animation/>}/>
  <Route path='404' element={<Error/>}/>
  <Route path='blank'element={<Blank/>}/>
  

</Route>

  </Routes>


  </BrowserRouter>
 </>

  );
}

export default App;
