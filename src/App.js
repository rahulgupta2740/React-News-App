import './App.css';

import React, { useEffect, useState } from 'react'
import Navbar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import{
  BrowserRouter,
  Routes,
  Route
}from "react-router-dom"
const App =()=> {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress,setProgress] = useState(0)
  
  useEffect(() => {
    setProgress(progress)
  },[])
    return (
<BrowserRouter>
      <div >
        
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
      
        <Navbar/>
        <Routes> 
          <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country = "in" category = "general"/>}></Route>
          <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} country = "in" category = "business"/>}></Route>
          <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country = "in" category = "entertainment"/>}></Route>
          <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSize} country = "in" category = "health"/>}></Route>
          <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} country = "in" category = "science"/>}></Route>
          <Route exact path="/sport" element={<News apiKey={apiKey} setProgress={setProgress} key="sport" pageSize={pageSize} country = "in" category = "sport"/>}></Route>
          <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country = "in" category = "technology"/>}></Route>
          {/*  key=""<Route exact path="/" element={<News setProgress={setProgress} pages={9} country = "in" category = "general"/>}></Route> */}
          
        </Routes>
        
      </div>
      </BrowserRouter>
    )
  
}

export default App;