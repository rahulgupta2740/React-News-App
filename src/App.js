import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import{
  BrowserRouter,
  Routes,
  Route
}from "react-router-dom"
export default class App extends Component {
  pageSize = 9;
  apiKey = process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div >
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Navbar/>
        <Routes> 
          <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pazeSize} country = "in" category = "general"/>}></Route>
          <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={this.pazeSize} country = "in" category = "business"/>}></Route>
          <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.pazeSize} country = "in" category = "entertainment"/>}></Route>
          <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={this.pazeSize} country = "in" category = "health"/>}></Route>
          <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={this.pazeSize} country = "in" category = "science"/>}></Route>
          <Route exact path="/sport" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sport" pageSize={this.pazeSize} country = "in" category = "sport"/>}></Route>
          <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={this.pazeSize} country = "in" category = "technology"/>}></Route>
          {/*  key=""<Route exact path="/" element={<News setProgress={setProgress} pages={9} country = "in" category = "general"/>}></Route> */}
          
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

