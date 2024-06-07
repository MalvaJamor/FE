import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<h1 className='text-center text-4xl font-bold'>Hello World!!!</h1>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
