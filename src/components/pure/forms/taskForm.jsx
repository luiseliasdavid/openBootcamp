import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import {LEVEL} from '../../../models/level.js'
import { Task } from '../../../models/task.class'

export default function TaskForm({add}) {

  const nameRef= useRef('')
  const descriptionRef= useRef('')
  const levelRef= useRef(LEVEL.NORMAL)

  function addTask(e){
    e.preventDefault();
    const newTask= new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    )
    add(newTask)
  }

  return (
    <form
      onSubmit={addTask}
      className="d-flex justifi-content-center  aligin-center mb-4"
    >
      <div className="form-outline flex">
        <input
          ref={nameRef}
          id="inputName"
          type="text"
          className="form-control form-control-lg"
          required
          autoFocus
          placeholder='task name'
        />
        <input
          ref={descriptionRef}
          id="inputDescription"
          type="text"
          className="form-control form-control-lg"
          required
          autoFocus
          placeholder='tas description'
        />
        <label htmlFor="selectLevel" className="sr-only">
          Priority
        </label>
        <select
          ref={levelRef}
          defaultValue={LEVEL.NORMAL}
          id="selectLevel"
        >
        <option value={LEVEL.NORMAL}>
          Normal
        </option>
        <option value={LEVEL.URGENT}>
          Urgent
        </option>
        <option value={LEVEL.BLOCKING}>
          Blocking
        </option>

        </select>
      </div>
      <button type='submmit' className='btn btn-success btn-lg ms-2' >add</button>
    </form>
  );
}

TaskForm.propTypes={
  add: PropTypes.func.isRequired
}