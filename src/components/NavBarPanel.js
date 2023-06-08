import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './my.css';

const NavBarPanel = () => {
    const cartProducts = useSelector(state => state.cart);

    return (
        <div className='headerPanel'>
            {/* <Navbar bg="dark" variant="dark"> */}
            {/* <Navbar bg="primary" variant="dark"> */}
            <Navbar bg="light" variant="light">
                <Container fluid>
                    <Navbar.Brand href="#home">My Store</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to='/' as={Link}>Products</Nav.Link>
                        {/* <Nav.Link href="#features">Features</Nav.Link> */}
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className='justify-content-end'>
                        <Navbar.Text>
                            <Nav.Link to='/cart' as={Link}>My Cart {cartProducts.length}</Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBarPanel;