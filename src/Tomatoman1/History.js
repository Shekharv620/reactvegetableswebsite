import React, { Component } from 'react'
import {Table} from 'react-bootstrap';
import axios from 'axios';

export default class History extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
     details:[],
   }
 }
 
  componentDidMount(){
      this.historyDetails()
  }

  historyDetails(){
    let dic = {
      customer_id: localStorage.getItem("contact",this.state.contact)
  }
  axios.post("http://tomatoman.pythonanywhere.com/items/order_api/mobile/",dic)
  .then(response => {
      console.log(response.data)
      let data = response.data
      console.log(data)
      this.setState({
        details:data
      })
  }).catch(error => {
      console.log(error)
  })
  }

  render() {
    return (
      <div style={{marginTop:60}}>
           <div style={{border:'1px solid black',width:500,margin:'auto',
           backgroundColor:'teal',color:'white'}}>
            <h1>History</h1>
           
              {this.state.details.map((h)=>
               <Table style={{backgroundColor:'orange',color:'white'}}>
                    <tr>
                    <th><b>Order</b></th>
                    <td><b>{h.date}</b> </td>
                  </tr>
                  <tr>
                    <th><b>Payment Mode:- </b></th>
                    <td><b>{h.payment_mode}</b> </td>
                  </tr>
                  <tr>
                    <th><b>Payment Status:-</b></th>
                    <td><b>{h.payment_status}</b> </td>
                  </tr>
                  <tr>
                    <th><b>Total Price in  Rs:-</b></th>
                    <td><b>{h.total_amount}</b> </td>
                  </tr>
                  </Table>
              )}
        </div>
      </div>
    )
  }
}
