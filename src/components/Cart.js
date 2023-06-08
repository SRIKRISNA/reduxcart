import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {remove} from '../store/cartSlice';

const Cart =()=>{
    const products = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const removeItem = (id) =>{
        // dipatch a remove action
        dispatch(remove(id));
    }

    const cards = products.map(product => (
        <div key={product.id} className="col-md-3" style={{marginBottom:"20px"}}>
            <Card  style={{ width: '18rem' }}  className='h-100'>
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
        <>
            <h2>My Cart Items</h2>
            {cards}
        </>
    )
}

export default Cart;