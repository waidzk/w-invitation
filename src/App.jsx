import './App.css'
import { Route, Routes } from 'react-router-dom'
import Opening from '../pages/Opening'
import Greetings from '../pages/Greetings'
import Bride from '../pages/Bride'
import Groom from '../pages/Groom'
import Event from '../pages/Event'
import Maps from '../pages/Maps'
import Gallery from '../pages/Gallery'
import Quotes from '../pages/Quotes'
import Gift from '../pages/Gift'
import RSPV from '../pages/RSPV'
import Thanks from '../pages/Thanks'

function App() {

  return (
    <div className='flex justify-center bg-[#d3c8af]'>
      <Routes>
        <Route path='/' element={<Opening />}/>
        <Route path='/greetings' element={<Greetings />}/>
        <Route path='/bride' element={<Bride />}/>
        <Route path='/groom' element={<Groom />}/>
        <Route path='/event' element={<Event />}/>
        <Route path='/maps' element={<Maps />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/quotes' element={<Quotes />}/>
        <Route path='/rspv' element={<RSPV />}/>
        <Route path='/gift' element={<Gift />}/>
        <Route path='/thanks' element={<Thanks />}/>
      </Routes>
    </div>
  )
}

export default App
