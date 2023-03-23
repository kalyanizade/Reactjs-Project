import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const [name, setName] = useState('');
  const [tasks, setTasks] = useState([]);
  const getTasks = () => {
    fetch('https://dummy.restapiexample.com/api/v1/employees').then(rsp => rsp.json()).then(data => {
      setTasks(data.data);
    })
  }
  return (
    <>
    <div className='row'>
      <div className='col-lg-3'>
        <button className='btn btn-primary' onClick={() => {
          getTasks();
        }}>Fetch Tasks</button>
      </div>
    </div>
    <div className='row'>
    { tasks.map((task) => (<>
      <div className='col-lg-4'>
        <div className='card'>
          <div className='card-body'>
         <b>ID_no:</b> { task.id } <br></br>
         <b>Employee_name:</b>{ task.employee_name }<br></br>
         <b>Employee_salary:</b> {task.employee_salary}
          </div>
        </div>
      </div>
    </>)) }
    </div>
    </>
  );
}

export default App;