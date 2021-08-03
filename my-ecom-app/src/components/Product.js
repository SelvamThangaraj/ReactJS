import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';

const Product = ({product}) => {
    //https://reactstrap.github.io/components/card/
    
    return (
        // <div>
        //     {product.name}
        // </div>
        
        <Container>
            {/* {console.log("product=>"+JSON.stringify(product))} */}
            <Card>
                <CardImg top width="100%" src={product.image} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{product.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>{product.description}</CardText>
                    <Button>Button</Button>
                </CardBody>

            </Card>
        </Container>
    )

}

export default Product