import React, { useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from 'react-redux';
import {add} from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import StatusCode from "../utils/StatusCode";

const Product = () => {
    const dispatch = useDispatch();
    const {data: products, status} = useSelector(state => state.products);

    // const [products, getproducts] = useState([]);

    useEffect(() => {
        // fetch("https://fakestoreapi.com/products")
        //     .then(data => data.json())
        //     .then(res => getproducts(res));

        // dispatch an action for fetchproducts
        dispatch(getProducts());
    }, []);

    if(status === StatusCode.LOADING){
        return <p>Loading...</p>
    }
    if(status === StatusCode.ERROR){
        return <Alert key='dnager' variant='danger'>Something went Wrong, please check!</Alert>
    } 

    const addToCart = (product) =>{
        //dispatch an add action
        dispatch(add(product));
    }

    const cards = products.map(product => (
        <div key={product.id} className="col-md-3" style={{marginBottom:"20px"}}>
            <Card style={{ width: '18rem' }}  className='h-100'>
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{ width: "100px", height:"130px" }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        Rs. {product.price}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>addToCart(product)} >Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    ))
    return (
        <div>
            Product Dashboard
            <div className="row">
                {cards}
            </div>
        </div>
    )
}

export default Product;