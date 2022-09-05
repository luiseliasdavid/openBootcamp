import { useEffect } from 'react';
import {BrowserRouter as Router ,
   Routes,
   Route,
   Link,
   Navigate} from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskDetailPage from './pages/task/TaskDetailPage';
import Task from './pages/task/Task';
import MustBeLoggued from './pages/mustBeLoggued/MustBeLoggued';
import LoginPage from './pages/auth/LoginPage';
import YouAreLogged from './pages/home/YouAreLogged/YouAreLoggued';
//import './App.css'


function AppRoutingOne() {

  let query= new URLSearchParams(window.location.search)
  console.log(query)
  let logged= localStorage.getItem('credencials')

  let taskList= [
    {id: 1,
    name:'task1',
    description: 'my first task'},

    {id:2,
    name:'task2',
    description: 'my second task'}
  
  ]

useEffect(() => {

  logged= localStorage.getItem('credencials');
  
},[]);



  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>||Home|</Link>
          <Link to='/about'>|About|</Link>
          <Link to='/faqs'>|Faqs|</Link>
          <Link to='/login'>|Login|</Link>
          <Link to='/tasks/1'>|task 1|</Link>
          <Link to='/tasks/2'>|task 2|</Link>
          <Link to='/404'>|Not existing route||</Link>

        </aside>

      </div>

        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='login' element={logged? <YouAreLogged/>: <LoginPage/>} />
          <Route path='/profile' element={logged? <ProfilePage/>: <MustBeLoggued/> } />
         
            
          
          <Route path='tasks' element={<Task/>}  />
         {/*  <Route exact path='tasks/:id' render={({match})=> <TaskDetailPage task={taskList[match.params.id]}} /> */}
          <Route exact path='tasks/:id' element={<TaskDetailPage task={taskList}/>} />

          <Route  path='*'  element={<NotFoundPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/faqs" element={<AboutPage/>}/>
        </Routes>
    </Router>
  );
}

export default AppRoutingOne;
