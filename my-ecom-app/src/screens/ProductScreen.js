import React from 'react';
import {Link} from 'react-router-dom';
import products from '../products'
import Rating from '../components/Rating'
import { Row,Col,Image,ListGroup,Card,Button } from 'react-bootstrap'; 

const ProductScreen =({match})=>{
    const product=product.find((p)=> p._id === match.params.id)
    return(
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid></Image>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Rating
                                value={product.rating}
                                text={`${product.numReviews} reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price:${product.price}
                        </ListGroup.Item>
                        <ListGroup.item>
                            Description: ${product.description}
                        </ListGroup.item>
                    </ListGroup>
                </Col>
                <Col md={3}></Col>
            </Row>
        </>
    )
}

export default ProductScreen;