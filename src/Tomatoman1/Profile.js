// import React, { Component } from 'react'
// import {Button,Form} from 'react-bootstrap';
// import {Link, Redirect} from 'react-router-dom';
// export default class Profile extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              fullname:"",
//              contact:"",
//              address:"",
//              landmark:""
//         }
//         this.onHandleChange=this.onHandleChange.bind(this);
//         this.placeOrder=this.placeOrder.bind(this);
//     }

//     onHandleChange(e){
//         const name=e.target.name;
//         const value=e.target.value;
//         this.setState({
//             [name]:value
//         })
//     }

//     componentDidMount(){
//        var fullname = localStorage.getItem("fullname",this.state.fullname);
//        var contact = localStorage.getItem("contact",this.state.contact);
//        var address = localStorage.getItem("address",this.state.address);
//        var landmark = localStorage.getItem("landmark",this.state.landmark);
//        this.setState({
//            fullname:fullname,
//            contact:contact,
//            address:address,
//            landmark:landmark
//        })
//     }
    
//   placeOrder(e)
//   {
//       e.preventDefault()
//       console.log(this.state)
//       alert("Your order is placed!!!!")
//       localStorage.setItem("fullname",this.state.fullname);
//       localStorage.setItem("contact",this.state.contact);
//       localStorage.setItem("address",this.state.address);
//       localStorage.setItem("landmark",this.state.landmark);
//       this.props.history.push('/History');
//   }  
//   render() {
//     return (
//       <div>
//           <h1>Profile !!!</h1>
//           <Form onSubmit={this.placeOrder}>
//   <Form.Group controlId="formFullName">
//     <Form.Label>FullName:</Form.Label>
//     <Form.Control type="text" placeholder="Enter full name" 
//     name="fullname"
//     value={this.state.fullname}
//     onChange={this.onHandleChange} />
//   </Form.Group>

//   <Form.Group controlId="formContact">
//     <Form.Label>Contact:</Form.Label>
//     <Form.Control type="text" placeholder="Enter contact"
//     name="contact"
//     value={this.state.contact}
//     onChange={this.onHandleChange} />
//   </Form.Group>

//   <Form.Group controlId="formAddress">
//     <Form.Label>Address:</Form.Label>
//     <Form.Control type="text" placeholder="Enter address" 
//      name="address"
//      value={this.state.address}
//      onChange={this.onHandleChange} />
//   </Form.Group>

//   <Form.Group controlId="formAddress">
//     <Form.Label>LandMark:</Form.Label>
//     <Form.Control type="text" placeholder="Enter landmark" 
//     name="landmark"
//     value={this.state.landmark}
//     onChange={this.onHandleChange}/>u
//   </Form.Group>
  
//   <Button variant="primary" type="submit">
//     Order
//   </Button>
// </Form>
//       </div>
//     )
//   }
// }



import React, { Component } from 'react'
import {Button,Form} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';

class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fullname:"",
             contact:"",
             address:"",
             landmark:"",
             senddetails: []
        }
        this.onHandleChange=this.onHandleChange.bind(this);
        this.placeOrder=this.placeOrder.bind(this);
    }

    onHandleChange(e){
        const name=e.target.name;
        const value=e.target.value;
        this.setState({
            [name]:value
        })
    }

    componentDidMount(){
       console.log(this.props.products)
       let data = this.props.products
       let dic = {}
       for (let i=0; i<data.length; i++)
       {
           dic["item"]=data[i].product_name
           dic["price"]=data[i].product_totalprice
           dic["quantity"]=data[i].product_quantity
           this.state.senddetails.push(dic)
       }
       
       var fullname = localStorage.getItem("fullname");
       var contact = localStorage.getItem("contact");
       var address = localStorage.getItem("address");
       var landmark = localStorage.getItem("landmark");
       this.setState({
           fullname:fullname,
           contact:contact,
           address:address,
           landmark:landmark
       })
    }
    
  sendUserDetails(){
    let dic = {
      fullname: this.state.fullname,
      address: this.state.address,
      landmark:this.state.landmark,
      mobile: this.state.contact
          
      }
  axios.post("http://tomatoman.pythonanywhere.com/items/customer/",dic)
  .then(response => {
      console.log(response)
      this.placeOrderDetails()

  }).catch(error => {
      console.log(error)
  })
   
  this.setState(this.initialState)
  localStorage.setItem("fullname",this.state.fullname);
  localStorage.setItem("contact",this.state.contact);
  localStorage.setItem("address",this.state.address);
  localStorage.setItem("landmark",this.state.landmark);
  }

  placeOrderDetails(){
    console.log(this.state.senddetails)
    let dic = {
      "order": {
      customer: this.state.contact,
      date: "2021-01-29T06:00:11Z",
      payment_mode: "Pay On Delivery",
      payment_status: "Received",
      total_amount: this.props.gtotal
  },
  "items": this.state.senddetails
  }
  axios.post("http://tomatoman.pythonanywhere.com/items/place_order/",dic)
  .then(response => {
      console.log(response.data)
      this.props.history.push('/history');
  }).catch(error => {
      console.log(error)
  })
  }


  placeOrder(e)
  {
      e.preventDefault()
      console.log(this.state)
      // user detail api
      this.sendUserDetails()
      alert("Your order is placed!!!!")
      
      
  }  
  render() {
    return (
      <div style={{marginTop:60}}>
          <h1></h1>
          <Form onSubmit={this.placeOrder}>
  <Form.Group controlId="formFullName">
    <Form.Label>FullName:</Form.Label>
    <Form.Control type="text" placeholder="Enter full name" 
    name="fullname"
    value={this.state.fullname}
    onChange={this.onHandleChange} />
  </Form.Group>

  <Form.Group controlId="formContact">
    <Form.Label>Contact:</Form.Label>
    <Form.Control type="text" placeholder="Enter contact"
    name="contact"
    value={this.state.contact}
    onChange={this.onHandleChange} />
  </Form.Group>

  <Form.Group controlId="formAddress">
    <Form.Label>Address:</Form.Label>
    <Form.Control type="text" placeholder="Enter address" 
     name="address"
     value={this.state.address}
     onChange={this.onHandleChange} />
  </Form.Group>

  <Form.Group controlId="formAddress">
    <Form.Label>LandMark:</Form.Label>
    <Form.Control type="text" placeholder="Enter landmark" 
    name="landmark"
    value={this.state.landmark}
    onChange={this.onHandleChange}/>
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Order
  </Button>
</Form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
     products: state.VegetableReducer.productList,
      gtotal: state.totalReducer.total
  }
}
export default connect(mapStateToProps)(Profile);



// ___________________________________

// import React, { Component } from 'react';
// import {Button,Form} from 'react-bootstrap';
// //   import NavBar from './NavBar';
// //  import { NavBar } from './Tomatoman1/NavBar';
// import axios from 'axios';
// import {connect} from 'react-redux';


// class Profile extends Component {
//     constructor(props) {
//         super(props)
        
//         this.state = {
//              fullname:"",
//              contact:"",
//              address:"",
//              landmark:"",
//              senddetails: []
//         }
//         this.onHandleChange=this.onHandleChange.bind(this);
//         this.placeOrder=this.placeOrder.bind(this);
//     }

//     onHandleChange(e){
//         const name=e.target.name;
//         const value=e.target.value;
//         this.setState({
//             [name]:value
//         })
//     }

//     componentDidMount(){
//        console.log(this.props.products)
//        let data = this.props.products
//        let dic = {}
//        for (let i=0; i<data.length; i++)
//        {
//            dic["item"]=data[i].product_name
//            dic["price"]=data[i].product_totalprice
//            dic["quantity"]=data[i].product_quantity
//            this.state.senddetails.push(dic)
//        }
//        this.getCustomerDetails()
//       //  var fullname = localStorage.getItem("fullname");
//       //  var contact = localStorage.getItem("contact");
//       //  var address = localStorage.getItem("address");
//       //  var landmark = localStorage.getItem("landmark");
//       //  this.setState({
//       //      fullname:fullname,
//       //      contact:contact,
//       //      address:address,
//       //      landmark:landmark
//       //  })
//     }
  
//   getCustomerDetails(){
//     let number=localStorage.getItem("contact")
//     let dic = 
//     {
//       mobile:number
//     }
//     axios.post("http://tomatoman.pythonanywhere.com/items/address_api/mobile/",dic)
//     .then(response => {
//         console.log(response.data)
//         let getArr=response.data
//         console.log(getArr[0].fullname)
//         this.setState({
//           fullname:getArr[0].fullname,
//           contact:getArr[0].mobile,
//           address:getArr[0].address,
//           landmark:getArr[0].landmark
//       })
//     }).catch(error => {
//         console.log(error)
//     })
//   }  


//   sendUserDetails(){
//     let dic = {
//       fullname: this.state.fullname,
//       address: this.state.address,
//       landmark:this.state.landmark,
//       mobile: this.state.contact
          
//       }
//   axios.post("http://tomatoman.pythonanywhere.com/items/customer/",dic)
//   .then(response => {
//       console.log(response)
//       this.placeOrderDetails()

//   }).catch(error => {
//       console.log(error)
//   })
   
//   this.setState(this.initialState)
//   localStorage.setItem("fullname",this.state.fullname);
//   // localStorage.setItem("contact",this.state.contact);
//   localStorage.setItem("address",this.state.address);
//   localStorage.setItem("landmark",this.state.landmark);
//   }

//   placeOrderDetails(){
//     console.log(this.state.senddetails)
//     let dic = {
//       "order": {
//       customer: this.state.contact,
//       date: "2021-01-29T06:00:11Z",
//       payment_mode: "Pay On Delivery",
//       payment_status: "Received",
//       total_amount: this.props.gtotal
//   },
//   "items": this.state.senddetails
//   }
//   axios.post("http://tomatoman.pythonanywhere.com/items/place_order/",dic)
//   .then(response => {
//       console.log(response.data)
//       this.props.history.push('/history');
//   }).catch(error => {
//       console.log(error)
//   })
//   }


//   placeOrder(e)
//   {
//       e.preventDefault()
//       console.log(this.state)
//       // user detail api
//       this.sendUserDetails()
//       alert("Your order is placed!!!!")
      
      
//   }  
//   render() {
//     return (
//       <div style={{marginTop:60}}>
//           <NavBar />
//           <Form onSubmit={this.placeOrder}>
//   <Form.Group controlId="formFullName">
//     <Form.Label>FullName:</Form.Label>
//     <Form.Control type="text" placeholder="Enter full name" 
//     name="fullname"
//     value={this.state.fullname}
//     onChange={this.onHandleChange} />
//   </Form.Group>

//   <Form.Group controlId="formContact">
//     <Form.Label>Contact:</Form.Label>
//     <Form.Control type="text" placeholder="Enter contact"
//     name="contact"
//     value={this.state.contact}
//     onChange={this.onHandleChange} />
//   </Form.Group>

//   <Form.Group controlId="formAddress">
//     <Form.Label>Address:</Form.Label>
//     <Form.Control type="text" placeholder="Enter address" 
//      name="address"
//      value={this.state.address}
//      onChange={this.onHandleChange} />
//   </Form.Group>

//   <Form.Group controlId="formAddress">
//     <Form.Label>LandMark:</Form.Label>
//     <Form.Control type="text" placeholder="Enter landmark" 
//     name="landmark"
//     value={this.state.landmark}
//     onChange={this.onHandleChange}/>
//   </Form.Group>
  
//   <Button variant="primary" type="submit">
//     Order
//   </Button>
// </Form>
//       </div>
//     )
//   }
// }

// function mapStateToProps(state){
//   return {
//      products: state.VegetableReducer.productList,
//      gtotal: state.totalReducer.total
//   }
// }
// export default connect(mapStateToProps)(Profile);



