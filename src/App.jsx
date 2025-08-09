import './App.css'
import Opening from '../pages/Opening'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='flex justify-center bg-[#d3c8af]'>
      <Routes>
        <Route path='/' element={<Opening />}/>
      </Routes>
    </div>
  )
}

export default App
