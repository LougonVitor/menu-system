import './App.css'
import Foods from './pages/Foods'
import Home from './pages/Home'
import { Layout } from './Layout'
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/Foods' element={<Foods/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App