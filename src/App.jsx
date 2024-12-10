import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='container'>
      <h2>Dashboard</h2>

      <div className='card'>
        <div className='card-info'>
          <h3>Completed tasks</h3>
          <p></p>
        </div>

        <div className='card-info'>
          <h3>pending tasks</h3>
          <p></p>
        </div>

        <div className='card-info'>
          <h3>all the tasks</h3>
            <p></p>
        </div>
      </div>
    </div>
  )
}

export default App
