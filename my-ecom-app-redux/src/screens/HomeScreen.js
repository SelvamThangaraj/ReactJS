//import React from 'react';
import { Row,Col } from 'react-bootstrap';
//import products from '../products'
import Product from '../components/Product'
import React, {useState, useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import {listProducts} from '../actions/productActions'

const HomeScreen = () => {

        //const [products,setProducts] = useState([])

       /*  useEffect(() =>{
            const fetchProducts = async () => {
                const {data} = await axios.get('/api/products/')
                setProducts(data)
            }
            fetchProducts()
        },[]) */

        const dispatch = useDispatch()
        const productlist = useSelector((state)=> state.productlist)
        const {loading,error,products} = productlist
        useEffect(() =>{
            dispatch(listProducts())
        },[])



    return (
        <div>
            <h1>Latest Products</h1>
            {
            loading ?(
                <h2>Loading...</h2>
            ):error ? (
                <h3>{error}</h3>
            ):(
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} x={3}>
                    <Product product = {product}/>
                    </Col>
                ))}
            </Row>
             )}
        </div>
    )
}

export default HomeScreen