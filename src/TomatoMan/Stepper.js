import React, { Component } from 'react'
import {Button} from 'react-bootstrap';

export default class Stepper extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            counter:0,
        }
    }
    incrementCounter = () => {
        this.setState((state) => (
            {
                counter:state.counter + 1,
            }
        )
      )  
    }
    decrementCounter = () => {
        if (this.state.counter > 0 )
        {
            this.setState((state) => (
                {
                    counter:state.counter - 1
                }
            )
          )  
        }
    }
      
      
    
  render() {

    return (
      <div>    
            <h4>Quantity:</h4>
            <Button onClick={this.incrementCounter}
            variant="btn btn-info"
            style={{fontSize:10,color:'white',
            width:30,height:30,fontWeight:'bold'}}>+</Button>&nbsp;&nbsp;{this.props.clickHandler(this.state.counter)}&nbsp;&nbsp;
            <Button onClick={this.decrementCounter}
            variant="btn btn-info"
            style={{fontSize:10,color:'white',
            width:30,height:30,fontWeight:'bold'}}>-</Button>
      </div>
    )
  }
}
