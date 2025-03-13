
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'

function App() {

  return (
    <>
   
     
      <BrowserRouter>
     <Appbar/>
      <Routes>
        <Route  path="/dashboard" element={<Dashboard/>}/>
        <Route  path="/" element={<Landing/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}
function Appbar(){
  const navigate=useNavigate();
 return( <div>
    <button onClick={()=>navigate("/")}>Landing </button>
    <button onClick={()=>navigate("/dashboard")}>DashBoard</button>
  </div>
 )
}


export default App
