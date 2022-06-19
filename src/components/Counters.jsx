import React,{Component} from 'react'
import Counter from './Counter';
class Counters extends Component {
  
 
  render() { 
    return (  
      <div>
      <button onClick={this.props.onReset} className='btn btn-primary btn-sm m-2'>Reset</button>
        <ul>
          {
            this.props.counters.map(counter => <Counter 
              key={counter.id} 
              onDelete={this.props.onDelete} 
              counter = {counter}
              onIncrement = {this.props.onIncrement} 
              />)}
        </ul>
      </div>
    );
  }
}
 
export default Counters;