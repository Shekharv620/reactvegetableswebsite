import React, { Component } from 'react'
import axios from 'axios';
import Stepper from './Stepper';
import {  Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { addproduct } from './Action';
import {Button,Navbar,Nav,Card,ListGroup} from 'react-bootstrap';
// import { propTypes } from 'react-bootstrap/esm/Image';
 
 class VegetableList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             vegetables:[],
             quantity:0,
             total:[],
              state1:[]
        }
    }

    parentHandler=(count)=>
    {
      console.log(count);
      // this.setState(
      //   {
          this.state.quantity=count
      //   }
      // )
      return this.state.quantity;
    }
    componentDidMount()
    {
        axios.get("http://tomatoman.pythonanywhere.com/items/items/").then(response =>{
            // console.log(response.data)
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

      const data = {
        product_name: veg.name,
        product_price: veg.price,
        product_category: veg.category,
        product_quantity:this.state.quantity,  
        product_totalprice:total      
        // product_status: this.state.status
      }
      this.props.add(data)
      
  } 
    
  render() {
    //  console.log(this.state.quantity)
    return (


      <div  >
            
      <ListGroup horizontal style={{display:'flex',flexWrap:'wrap'}}>
     {this.state.vegetables.map((veg,index)=>
        <ListGroup.Item key={index}>
           <Card style={{ width: '18rem' , }} >9
           {/* border:'1px solid', margin:'10px' */}
           <Card.Img variant="top"  width={"200px"} 
           src={"https://www.wlns.com/wp-content/uploads/sites/50/2020/10/vegetables.jpg" } />
           <Card.Body >
             {/* <Stepper handleSetQuantity={this.handleGetQuantity} /> */}
             <Stepper clickHandler={this.parentHandler}/>
             <Card.Title>category:{veg.category}</Card.Title>
             <Card.Text>Name:{veg.name}</Card.Text>
             <Card.Text>Price in Rs: {veg.price}</Card.Text>
             
             {/* <Card.Text>status: {veg.status}</Card.Text> */}
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
//       <div>
//            <h1>List of Vegetables</h1>
//            {this.state.vegetables.map((veg,index)=>
           
//             <div class="gallery" key={index}>
//                <img style={{height:'150px'}} 
//                src={ "https://www.wlns.com/wp-content/uploads/sites/50/2020/10/vegetables.jpg"} />
               
//                 <div class="desc">
//                   Price in Rs: {veg.price} <br></br>
//                   Name:{veg.name}<br></br>
//                   Category:{veg.category}
//                   <Stepper />
//                   <Link to='/card'>
//                   <button type="button" className="btn btn-info" 
//                   onClick={()=>this.submitHandler(veg)}> ADD TO CART</button>
//                   </Link>
//                 </div>
//             </div>
//             )}
//            </div>
//     )
//   }
// }




function mapStateToProps(state) {
  return {
        products: state.VegetableReducer.productList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    add: (data) => dispatch(addproduct(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(VegetableList);


