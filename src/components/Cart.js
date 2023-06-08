import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {remove} from '../store/cartSlice';
import './my.css';

const Cart =()=>{
    const products = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const removeItem = (id) =>{
        // dipatch a remove action
        dispatch(remove(id));
    }

    const cards = products.map(product => (
        <div key={product.id} style={{marginBottom:"20px"}}>
            <Card  style={{ width: '18rem' }}  className='h-100 cardOnly'>
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{ width: "100px", height:"130px" }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        Rs. {product.price}
                    </Card.Text>
                    <Button variant="danger" onClick={()=> removeItem(product.id)}  >Remove Item</Button>
                </Card.Body>
            </Card>
        </div>
    ))
    return(
        <div className='productsview'>
            <h3>My Cart Items</h3>

            <div className="allProducts">
                {cards}
            </div>
        </div>
    )
}

export default Cart;