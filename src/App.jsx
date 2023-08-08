import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Dashboard'
import Welcome from './Welcome'

function App() {

  return (
    <>
    
      <Routes>
      {/* <div className="container-fluid"> */}
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
      {/* </div> */}
      </Routes>
    </>
  )
}

export default App
