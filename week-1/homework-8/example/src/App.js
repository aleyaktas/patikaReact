import React from 'react'
import { ButtonComponent } from 'turtleui'
import 'turtleui/dist/index.css'

const App = () => {
  //Create buttons array according to type
  const buttons = [
    'text',
    'container',
    'outlined',
    'primary',
    'secondary',
    'success',
    'error',
    'default',
    'dashed'
  ]
  return (
    <div className='container'>
      <h1>Buttons:</h1>
      {/* Show button list */}
      {buttons.map((button) => (
        <div className='buttonContainer'>
          <span>{button}</span>
          <ButtonComponent text='Button' type={button} />
        </div>
      ))}
    </div>
  )
}

export default App
