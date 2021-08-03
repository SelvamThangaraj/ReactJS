import React from 'react';
import { Row,Col} from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

//https://reactrouter.com/web/guides/quick-start
const HomeScreen = () =>{
    return(
        <div>
            
            <h1>Latest Products</h1>
            {/* <Product product={products[0]} /> */}

            {/* {products.map((product)=>(
                <Product product = {product}/>
            ))} */}

            <Row>
                {products.map((product)=>(
                    // console.log("product=>"+JSON.stringify(product));
                    <Col key={product._id} sm={12} md={6} lg={4} x={3}>
                        <Product product = {product}/>
                    </Col>
                    
                ))}
            </Row>
            
        </div>
    )
}

export default HomeScreen
