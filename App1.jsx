import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
const Dashboard = React.lazy(()=>import('./pages/Dashboard'))
const Landing = React.lazy(()=>import('./pages/Landing'))
//lazy loading feature added
function App() {

  return (
    <>
   
     
      <BrowserRouter>
     <Appbar/>
      <Routes>
        <Route  path="/dashboard" element={<Suspense fallback={"loading.."}> <Dashboard/></Suspense>}/>
        <Route  path="/" element={<Suspense fallback={"loading.."}> <Landing/></Suspense>}/>

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
