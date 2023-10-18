import React from 'react'
import "./App.css"
import Header from './components/common/header/Header'
import {BrowserRouter as Router, Switch,Route,} from "react-router-dom";
import Homepages from './components/home/Homepages';
import Footer from './components/common/footer/Footer';
import Culture from './components/culture/Culture';
import Singlepages from './components/singlePage/Singlepages';
 


const App = () => {
  return (
    <>
    <Router>
     <Header/> 
     <Switch>
      <Route exact path = '/' component = {Homepages}/>
      <Route exact path = '/singlepage/:id' component = {Singlepages}/>
      <Route exact path = '/culture' component = {Culture}/>
     </Switch>
     <Footer/>
     </Router>
    </>
  )
}

export default App
