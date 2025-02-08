
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Landing from './pages/Landing';
import Game from './pages/Game';

function App() {

  return (
   <div className='min-h-screen bg-[#302E2B]'>
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/game' element={<Game/>}/>
      </Routes>
   </Router>
   </div>
  )
}

export default App
