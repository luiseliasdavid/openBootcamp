import { useEffect } from 'react';
import {BrowserRouter as Router ,
   Routes,
   Route,
   Navigate} from 'react-router-dom'
import NotFoundPage from './pages/404/NotFoundPage';
import DashBoard from './pages/dashboardPage/DashBoard';
import MustBeLogged2 from './pages/mustBeLoggued/MustBeLogged2.jsx';
import LoginPage from './pages/auth/LoginPage';
import Register from './pages/auth/Register'
import Task from './pages/task/Task';

function AppRoutingOne() {
//TODO change value to sesion storage
  let logged= false

  return (
  <Router>
  
    <Routes>
          {/* redireccion to protect our rutes */}
          <Route path='/' element={logged ? <DashBoard/> : <MustBeLogged2/>} ></Route>
          <Route exact path='/login' element={<LoginPage/>} />
          <Route exact path='/register' element={<Register/>} />
          <Route path='/dashboard' element={logged ? <DashBoard/> : <MustBeLogged2/>} ></Route>
         <Route path='*' element={NotFoundPage}></Route>
         <Route path='tasks' element={logged ?<Task/>:<MustBeLogged2/> }  />
    </Routes>
  </Router>    
  );
}

export default AppRoutingOne;
