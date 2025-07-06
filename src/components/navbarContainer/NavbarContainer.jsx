import {Form, FormControl, InputGroup, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import logo from '../../assets/logo.svg'; // Adjust the path as necessary

function NavbarContainer() {
    return (<Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
            <img
                src={logo}
                alt="Logo"
                width="40"
                height="40"
                className="d-inline-block align-top"
            />{' '}
            MyApp
        </Navbar.Brand>
        {/* Search box */}
        <Form className="d-flex ms-3 me-auto">
            <InputGroup>
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
            </InputGroup>
        </Form>
        <Navbar.Toggle aria-controls="main-navbar-nav"/>
        <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
            <Nav className="justify-content-end">
                <Nav.Link href="/">A</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <NavDropdown title="Services" id="services-dropdown">
                    <NavDropdown.Item href="/design">Design</NavDropdown.Item>
                    <NavDropdown.Item href="/development">Development</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>);
}

export default NavbarContainer;