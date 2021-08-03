import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

const Footer=()=>{
    return(
        //https://react-bootstrap.github.io/layout/grid/
        <footer>
            <>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; MyShop
                    </Col>
                </Row>
            </>
        </footer>

    )
}

export default Footer 