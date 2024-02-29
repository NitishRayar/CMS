import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { navItems, serviceDropdown, toolsDropdown } from "./navItems";

function Header() {
  return (
    <Navbar expand="lg" className="cms-header" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/home" className="cms-header-logo">
          ಜನ ಸೇವಕ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navItems.map(item => {
              return item.path ? (
                <Nav.Link
                  key={item.title}
                  href={item.path}
                  className={item.cName}
                >
                  {item.title}
                </Nav.Link>
              ) : (
                <NavDropdown key={item.title} title={item.title}>
                  {(item.title === "Services"
                    ? serviceDropdown
                    : toolsDropdown
                  ).map((option, i) => {
                    return (
                      <>
                        {i !== 0 && <NavDropdown.Divider />}
                        <NavDropdown.Item
                          key={option.title}
                          href={option.path}
                          className={option.cName}
                        >
                          {option.title}
                        </NavDropdown.Item>
                      </>
                    );
                  })}
                </NavDropdown>
              );
            })}
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="/signin" className="signup">
              <Button variant="outline-light">SignIn</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
