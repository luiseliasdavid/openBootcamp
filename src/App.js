import TaskListComponent from "./components/container/task_list";
import MiComponenteConContexto from "./hooks/ejemplos3";
import Ejemplos4 from "./hooks/ejemplos4";

import './App.css'
import Clock from "./components/container/clock";
import Father from "./components/container/father";

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
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;


