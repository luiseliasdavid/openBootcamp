import TaskListComponent from "./components/container/task_list";
import MiComponenteConContexto from "./hooks/ejemplos3";
import Ejemplos4 from "./hooks/ejemplos4";

import './App.css'
import Clock from "./components/container/clock";
import Father from "./components/container/father";
import OpcionalRender from "./components/pure/opcionalRender";
import LoginFormik from "./components/pure/forms/loginFormik";
import RegisterFormik from "./components/pure/forms/registerFormik";
import TaskFormik from "./components/pure/forms/TaskFormik";
import AsyncExample from "./components/pure/forms/AsyncExample";
import ObservableExample from "./components/pure/forms/ObservableExample";
import FetchExample from './components/pure/forms/FetchExample'
import AxiosExample from "./components/pure/forms/AxiosExample";
import AxiosChuckNorris from "./components/pure/forms/AxiosChuckNorris";


function App() {
  return (
    <div>
      {/*  <Clock></Clock> */}
      {/* <h1>*****ejemplo de props.children********</h1> */}
      {/*  <MiComponenteConContexto></MiComponenteConContexto> */}
      {/*   <Ejemplos4 nombre="Luis" >
       <h3>
        Contenido del props.children
       </h3>
       
    </Ejemplos4> */}
    {/* <Father></Father> */}
     {/*  <TaskListComponent></TaskListComponent> */}
     {/* <OpcionalRender></OpcionalRender> */}
     {/* <LoginFormik></LoginFormik> */}
     {/* <RegisterFormik></RegisterFormik> */}

     {/* ejemplos de asincronia */}
     {/* <AsyncExample/> */}
     {/* <ObservableExample></ObservableExample> */}
     {/* <FetchExample></FetchExample> */}
     {/* <AxiosExample></AxiosExample> */}
     <AxiosChuckNorris></AxiosChuckNorris>
    
    </div>
  );
}

export default App;


