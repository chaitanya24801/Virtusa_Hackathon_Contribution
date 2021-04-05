import { Container, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { useHistory } from "react-router";
import { logout } from "../../api";
import "./css/navigation.css";

const Navigation = ({ activeElement, setActiveElement }) => {
  const history = useHistory();

  return (
    <Navbar expand="md" className="bg-info nav-bar" variant="dark">
      <Container>
        <img src="/Logo,jpg.png" alt="" className="nav-bar-img"/>
        <NavbarBrand className="nav-bar-brand">Neo Book Store</NavbarBrand>
        <NavbarToggle className="ml-auto" aria-controls="nav-bar" />
        <NavbarCollapse id="nav-bar">
          <Nav className="ml-auto nav-bar-nav">
            <NavLink
              className={
                activeElement === "products" ? "active-nav-link" : "nav-link"
              }
              onClick={() => {
                if (activeElement !== "products") setActiveElement("products");
              }}
            >
              Products
            </NavLink>
            <NavLink
              className={
                activeElement !== "products" ? "active-nav-link" : "nav-link"
              }
              onClick={() => {
                if (activeElement === "products") setActiveElement("orders");
              }}
            >
              Orders
            </NavLink>
            <NavLink
              onClick={() => {
                logout();
                history.push("/signin");
              }}
            >
              <span className="fa fa-sign-out"></span>Log out
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
