import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import Greet2 from './components/Greet2'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
         {/*<Greet name="Bruce">
            <p> this is children props</p>
         </Greet>
         <Greet name="clerk"/>
         <Greet name="Diana"/>
        <Welcome name="Bruce"  heroName="Batman">
            
         </Welcome>
         <Welcome name="clerk" heroName="Spiderman"/>
         <Welcome name="Diana" heroName="Wonder Woman"/>*/}
        {/* <Welcome /> */}
        {/* <Hello /> */} 
        {/*<Message></Message>*/}
        {/*<Counter></Counter>*/}
        {/*<Greet2 name="Bruce"  heroName="Batman">
        </Greet2>*/}
        {/*<FunctionClick></FunctionClick>
        <ClassClick/>*/}
        {/*<EventBind/>*/}
        <ParentComponent/>
      </div>
    )
  }
}

export default App;
