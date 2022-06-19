import React, { Component } from 'react';
import Counters from './components/Counters';
import NavBar from './components/NavBar';


class App extends Component {
  state = { 
    counters : [
      {id: 1, value: 0},
      {id: 2, value: 0},
      {id: 3, value: 4},
      {id: 4, value: 0},
      {id: 5, value: 6},
    ]
   }

   handleIncrement = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++;
    this.setState({counters})
   }

   handleReset = () => {
    const counters = this.state.counters.map(c =>{
      c.value = 0;
      return c;
    })
    this.setState({counters: counters})
   }

   handleDelete = (counter) =>{
    const counters = this.state.counters.filter(item => item.id !== counter)
    this.setState({counters: counters})
   }

  render() { 
    return (
      <div>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className='container'>
          <Counters 
            counters= {this.state.counters}
            onDelete={this.handleDelete} 
            onIncrement = {this.handleIncrement} 
            onReset={this.handleReset}
          />
        </main>
      
    </div>
    );
  }
}
 
export default App;