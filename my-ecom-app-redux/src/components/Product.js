import React from 'react';
import {Card,Button,Container} from 'react-bootstrap'
import { Link } from "react-router-dom";
import Rating from './Rating'
const Product = ({product}) => {
    return(
        <Container>
            <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                <Card.Title>
                    <strong>{product.name}</strong>
                </Card.Title>
                </Link>
                <Card.Text as='div'>
                <Rating value={product.rating}
                   text = {`${product.numReviews} reviews`}
                   />
                </Card.Text>

                <Card.Text as='h3'>
                ${product.price}
                </Card.Text>
                
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </Container>
       
    )
}

export default Product
