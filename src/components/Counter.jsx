import React, { Component } from 'react'
class Counter extends Component {
   

    //  constructor(){
    //     super()
    //     this.handleIncrement = this.handleIncrement.bind(this)
    //  }

     
    render() { 
        return (
            <div>
                

                <span className='badge bg-primary m-2'>{this.formatCount(this.props.Counter)}</span>
                <button onClick={() => {this.props.onIncrement(this.props.counter )}} className='btn btn-secondary btn-sm m-2'>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
            </div>
        );
    }

    formatCount(){
        const {value} = this.props.counter
        return value === 0 ? 'Zero' :value
    }
}
 


export default Counter;