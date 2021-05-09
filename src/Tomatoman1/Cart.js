// import React, { Component } from 'react'
// // import { BrowserRouter as Router , Route, Link, Switch, Redirect} from 'react-router-dom';
// import {connect} from 'react-redux';
// import {deleteproduct} from './Action';
// import {Button,Card,ListGroup} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
 
// class Cart extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        getVeg : []
//     }
//   }
//   componentDidMount(){
//     this.setState({
//       getVeg:this.props.products
//     });
//   }
//   render() {
//        console.log(this.props.products)
//     return (
//       <div>
//            <h1>Item Details</h1>
//           {/* {
//             this.props.products.map((veg,index)=>
//               <div className="gallery" key={index}>
//                 <img  
//                alt = "vegetable images"
//                src={ "https://www.wlns.com/wp-content/uploads/sites/50/2020/10/vegetables.jpg"} />
               
//                    Name: { veg.product_name}<br></br>
//                    Price: { veg.product_price}<br></br>
//                    Category: { veg.product_category}<br></br>
//                    <button style={{color:'red',backgroundColor:'white'}}
//                     onClick={()=>this.props.delete(veg.product_id)}
//                    >
//                      Delete
//                     </button> 
//                    <hr></hr>
//               </div>
//             )
//           } */}

// <ListGroup horizontal style={{display:'flex',flexWrap:'wrap'}}>
//            {this.props.products.map((veg,index)=>
//               <ListGroup.Item key={index}>
//                  <Card style={{ width: '18rem' }} >
//                  <Card.Img variant="top" 
//                  src={"https://www.wlns.com/wp-content/uploads/sites/50/2020/10/vegetables.jpg" } />
//                  <Card.Body>
//                    <Card.Title>Name:{veg.product_name}</Card.Title>
//                    <Card.Text>Price in Rs: {veg.product_price*veg.product_quantity} per kg</Card.Text>
//                    <Button type="button" variant="danger" 
//                    onClick={()=>this.props.delete(veg.product_id)}>
//                    DELETE</Button>
//                    </Card.Body>
//                   </Card>
//                  </ListGroup.Item>
//             )}
//             </ListGroup>
//             <Link to='/profile'>
//             <Button type="button" variant="secondary">
//                    Place Order</Button>
//             </Link>
            
//       </div>
//     )
//   }
// }
// function mapStateToProps(state){
//         return {
//            products: state.VegetableReducer.productList
//         }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     delete: (product_id) => dispatch(deleteproduct(product_id))
//   }
// }
    
// export default connect(mapStateToProps,mapDispatchToProps)(Cart);