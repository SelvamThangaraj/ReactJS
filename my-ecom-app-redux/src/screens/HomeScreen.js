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

        //useDispatch - A hook to access the redux dispatch function.
        const dispatch = useDispatch()
        //useSelector - A hook to access the redux store's state.
        const productlist = useSelector((state)=> state.productlist)
        //Destructuring: see example below
        const {loading,error,products} = productlist
        //listProducts() - connect to Actions -  ProjectActions
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

//Destructuring in react, sample below
// let object = { one: 1, two: 2, three: 3 }
// let { one, two, three } = object;
// console.log(one, two, three) // prints 1, 2, 3