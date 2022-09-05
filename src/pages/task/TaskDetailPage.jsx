import React from 'react'
import {useParams} from 'react-router-dom'

function TaskDetailPage({task}) {

const {id} = useParams()
let oneTask= task.filter(item=> item.id=== Number(id) )

  return (
    <div>
        <h1>Task Deail - {id} </h1>
        <h2>{oneTask[0].name} </h2>
        <h2>{oneTask[0].description} </h2>
        
    </div>
  )
}

export default TaskDetailPage
