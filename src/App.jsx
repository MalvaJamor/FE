import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Plans from './pages/Plans';
import Account from './pages/Account';
import Home from './pages/Home';
import Sign from './pages/Sign';
import Error from './pages/Error';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/plans' element={<Plans />} />
          <Route path='/account' element={<Account />} />
          <Route path='/sign' element={<Sign />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
