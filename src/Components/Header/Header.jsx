import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary Navbar">
            <Container>
                <Navbar.Brand href="#home">Prof.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='h-link'>
                <Nav className="h-link">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/addstudent">Add Student</Nav.Link>
                    <Nav.Link href='/studentlist'>Student List</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default Header