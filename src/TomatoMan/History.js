import React, { Component } from 'react'
import {Table} from 'react-bootstrap';
import axios from 'axios';
import NavBar from './NavBar';
import {Helmet} from 'react-helmet';

export default class History extends Component {
 constructor(props) {
   super(props)
   let mobile=localStorage.getItem("contact")
   this.state = {
     details:[],
     mobile
   }
 }
  
  componentDidMount(){
      console.log("componentDidMount")
      this.historyDetails()
  }

  historyDetails() 
  {
    let dic = {
      customer_id:this.state.mobile 
    }
    axios.post("http://tomatoman.pythonanywhere.com/items/order_api/mobile/",dic)
    .then(response => {
        console.log(response.data)
        let data = response.data
        // console.log(data)
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
     
        <Helmet>                                
            <style>{'body { background-image:url("https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1898&q=80"); }'}</style>
        </Helmet>

           <NavBar />
           <div className="table" style={{border:'1px solid black',width:1500,margin:'auto',
           backgroundColor:'#9d9e9e',color:'white'}}>
            <h1>History</h1>
           
              {this.state.details.map((h)=>
               <Table  >
                    <tr >
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
