import React, { Component } from 'react'
import axios from 'axios';
import Stepper from './Stepper';
import {  Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {addproduct} from './Action';
import {Button,Card,ListGroup} from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import {Helmet} from 'react-helmet'
// var update = require('immutability-helper');

 class VegetableList extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token == null)
        {
            loggedIn = false
        }
        else
        {
            console.log(token)
        }
      
        this.state = {
             vegetables:[],
             quantity:0,
             total:[],
             state1:[],
             loggedIn
        }
    }
    parentHandler=(count)=>{
      this.state.quantity=count
      console.log(this.state.quantity);
      return this.state.quantity;
  }

    componentDidMount()
    {
       
        console.log("calling componentDidMount",this.props.products)
        axios.get("http://tomatoman.pythonanywhere.com/items/items/").then(response =>{
            //console.log(response.data)
            this.setState({
                vegetables:response.data
            })
        }).catch(error =>{
            console.log(error)
        })
        
    }
    submitHandler = (veg) => {
      // console.log(veg)
     
      let total = (veg.price*this.state.quantity);
      // this.state.total.push(total)
      
        const data = {
          product_name: veg.name,
          product_price: veg.price,
          product_category: veg.category,
          product_quantity: this.state.quantity,
          product_totalprice: total
      }
      console.log("Total:",total)
      this.props.add(data)
      
  } 
    
  render() {
    if(this.state.loggedIn === false)
    {
        console.log(this.state.loggedIn)
        return <Redirect to ='/vegetable' />
    }
    return (
      <div>
  <Helmet>                            
    
  <style>{'body { background-image:url("https://images.unsplash.com/photo-1467453678174-768ec283a940?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1028&q=80"); }'}</style>
      
            </Helmet>


            <Navbar bg="dark" expand="lg" fixed="top">
                    <Navbar.Brand href="#home" style={{ color: 'white', fontSize: 22 }}>TomatoMan</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link href="/vegetable" style={{ color: 'white', fontSize: 20 }}><b>Menu</b></Nav.Link>
                            <Nav.Link href="/profile" style={{ color: 'white', fontSize: 20 }}><b>Profile</b></Nav.Link>
                            <Nav.Link href="/history" style={{ color: 'white', fontSize: 20 }}><b>History</b></Nav.Link>
<Nav.Link href="/cart" style={{ color: 'white', fontSize: 20 }}><b>Cart</b></Nav.Link>
                            <Nav.Link href="/logout" style={{ color: 'white', fontSize: 20, float: 'right' }}><b>Logout</b></Nav.Link>
                                    {/* <Nav.Link href="" style={{ marginRight: 20 }}>
                      <Link to='/cart' style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}>
                        <b>Cart</b>
                      </Link>
                    </Nav.Link> */}
                            </Nav>
                            </Navbar.Collapse>
                        </Navbar>
            <ListGroup horizontal style={{display:'flex',flexWrap:'wrap',marginTop:60}}>
           {this.state.vegetables.map((veg,index)=>
              <ListGroup.Item key={index}>
                 <Card style={{ width: '18rem' }} >
                 
                 {index==0?<img className="img" src={"data:image/jpeg;base64,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"}/>:null}
                 {index==1?<img  className="img" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz0SscjInwEDMS2A1bSXSp8ZueXHYbJowtdoIAV6l60aXko9EKxRP41sLFc3U6qM4g4oo&usqp=CAU"}/>:null}
                 {index==2?<img  className="img" src={"https://thumbs.dreamstime.com/b/lady-finger-okra-vegetables-white-cup-food-green-fresh-organic-closeup-isolated-background-133846727.jpg"}/>:null}
                 {index==3?<img  className="img" src={"https://freshomart.in/wp-content/uploads/2020/08/100908967-eggplant-isolated-on-white.jpg"}/>:null}
                 {index==4?<img  className="img" src={"https://www.wallpaperflare.com/static/29/673/262/tomato-lot-vegetable-food-wallpaper.jpg"}/>:null}
                 {index==5?<img  className="img" src={"https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG.jpg"}/>:null}
                         
                 {/* <img src={"https://ak.picdn.net/shutterstock/videos/1013920376/thumb/12.jpg,"}/>          */}
                
                 
                 <Card.Body>
                 
                   <Stepper clickHandler={this.parentHandler}/>
                   <Card.Title>Category:{veg.category}</Card.Title>
                   <Card.Text>Name:{veg.name}</Card.Text>
                   <Card.Text>Price in Rs: {veg.price}</Card.Text>
                   <Button type="button" variant="primary" 
                   onClick={()=>this.submitHandler(veg)}>
                   ADD TO CART</Button>
                   </Card.Body>
                  </Card>
                 </ListGroup.Item>
            )}
            </ListGroup>
           </div>
    )
  }
}

function mapStateToProps(state){
     return {
    products: state.VegetableReducer.productList
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    add: (data) => dispatch(addproduct(data))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(VegetableList);

