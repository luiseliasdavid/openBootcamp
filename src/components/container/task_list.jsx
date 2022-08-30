import React, { useEffect, useState } from 'react';

import { LEVEL } from '../../models/level';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
  const defaultTask1 = new Task("task1", "David", false, LEVEL.NORMAL);
  const defaultTask2 = new Task("task2", "David", true, LEVEL.URGENT);
  const defaultTask3 = new Task("task3", "David", false, LEVEL.BLOCKING);

  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log('contacto ha sido modificado')
    setIsLoading(false);
    return () => {
      //     console.log('this component is goin to unmount')
    };
  }, [tasks]);
  

  function completedTask(task){
    const index= tasks.indexOf(task);
    const tempTask= [...tasks];
    tempTask[index].completed= !tempTask[index].completed
    setTasks(tempTask);
  }

  function deleteTask(task){
   // console.log('delete this task', task)
    const index= tasks.indexOf(task);
    const tempTask= [...tasks];
    tempTask.splice(index,1)
    setTasks(tempTask)
  }
  function addTask(task){
      const tempTask= [...tasks];
    tempTask.push(task)
    setTasks(tempTask)
  }

  const Table= ()=>{
    return (
    <table>
    <thead>
      <tr>
        <th scope="col"> Task </th>
        <th scope="col">Description </th>
        <th scope="col">Priority </th>
        <th scope="col"> Actions </th>
      </tr>
    </thead>

    <tbody>
      {tasks.map((task, index) => (
        <TaskComponent 
        key={index} 
        task={task} 
        completed={completedTask}
        deleteTask={deleteTask}
        ></TaskComponent>
      ))}
    </tbody>
  </table>
)
  }

  let taskTable= <Table></Table>

if (tasks.length>0){ taskTable= <Table></Table> }
else {taskTable= <div style={{display: 'flex', flexDirection: 'column',
  textAlign: 'center'}}> <h3>there is no tasks</h3>
<h6>Please, create one</h6>
</div>}

const isLoadingStyle= {
  color: 'grey',
  fontSize: '30px',
  fontWeight: 'bold'
}

  return (
    <div className="col-12">
      <div className="card">
        {/* card header */}
        <div className="card-header p-3">
          <h5>Your Tasks:</h5>
        </div>
        {/* car body */}
        <div
          className="card-body"
          data-mdb-perfect-scrollbar="true"
          style={{ position: "relative", height: "400px" }}
        >
         { isLoading? <p>Loading...</p> : taskTable}
          <div>
          </div>
        </div>
      </div>
            <TaskForm add={addTask} tasksLength={tasks.length}></TaskForm>
    </div>
  );
};

export default TaskListComponent


 
