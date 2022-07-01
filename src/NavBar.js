import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav, NavbarBrand, NavItem, Row, Col} from "reactstrap";

const NavBar = ({ signedIn=false, username=null, user}) => {
  user = JSON.parse(user);
  return (
    <div>
      {/* <Navbar expand="md"> */}
{/* 
      <NavbarBrand href="/">
        Jobly
      </NavbarBrand> */}
      <Navbar>
        {/* <Row> */}
          {/* <Col>
            <NavLink exact to="/" className="navbar-brand">
              Jobly
            </NavLink>
          </Col> */}
          {/* <Col> */}
            <NavbarBrand href="/">
              Jobly
            </NavbarBrand>

            {/* <Nav className="mr-auto" navbar> */}
            {/* <Nav expand="md" navbar> */}
              {/* <Row>
                <Col xs="">
                  <p>{user.username}</p>
                </Col>
                <Col xs="">
                  <p>{user.firstName}</p>
                </Col>
                <Col xs="">
                  <p>{user.lastName}</p>
                </Col>
                <Col xs="">
                  <p>{user.email}</p>
                </Col>
              </Row>
            </Nav> */}

          {/* </Col>
          <Col> */}
            {
              signedIn
              ? 
              <Nav className="mr-auto" navbar>
              {/* <Nav expand="md" navbar> */}
                <Row>
                  <Col xs="">
                    <NavItem>
                      <NavLink to="/companies">Companies</NavLink>
                    </NavItem>
                  </Col>
                  <Col xs="">
                    <NavItem>
                      <NavLink to="/jobs">Jobs</NavLink>
                    </NavItem>
                  </Col>
                  <Col xs="">
                    <NavItem>
                      <NavLink to="/profile">Profile</NavLink>
                    </NavItem>
                  </Col>
                  <Col xs="">
                    <NavItem>
                      <NavLink to="/logout">Logout {username}</NavLink>
                    </NavItem>
                  </Col>
                </Row>
              </Nav>
              :
              <Nav className="ml-auto" navbar>
                <Row>
                  <Col>
                    <NavItem>
                      <NavLink to="/login">Login</NavLink>
                    </NavItem>
                  </Col>
                  <Col>
                    <NavItem>
                      <NavLink to="/signup">Signup</NavLink>
                    </NavItem>
                  </Col>
                </Row>
              </Nav>
            }
          {/* </Col>
        </Row> */}
      </Navbar>

      <Container>
        {/* <Row>
          <Col className="bg-light border">
            .col
          </Col>
        </Row>
        <Row>
          <Col className="bg-light border">
            .col
          </Col>
          <Col className="bg-light border">
            .col
          </Col>
          <Col className="bg-light border">
            .col
          </Col>
          <Col className="bg-light border">
            .col
          </Col>
        </Row>
        <Row>
          <Col
            className="bg-light border"
            xs="3"
          >
            .col-3
          </Col>
          <Col
            className="bg-light border"
            xs="auto"
          >
            .col-auto - variable width content
          </Col>
          <Col
            className="bg-light border"
            xs="3"
          >
            .col-3
          </Col>
        </Row>
        <Row>
          <Col
            className="bg-light border"
            xs="6"
          >
            .col-6
          </Col>
          <Col
            className="bg-light border"
            xs="6"
          >
            .col-6
          </Col>
        </Row>
        <Row>
          <Col
            className="bg-light border"
            sm="4"
            xs="6"
          >
            .col-6 .col-sm-4
          </Col>
          <Col
            className="bg-light border"
            sm="4"
            xs="6"
          >
            .col-6 .col-sm-4
          </Col>
          <Col
            className="bg-light border"
            sm="4"
          >
            .col-sm-4
          </Col>
        </Row>
        <Row>
          <Col
            className="bg-light border"
            sm={{
              offset: 1,
              order: 2,
              size: 6
            }}
          >
            .col-sm-6 .order-sm-2 .offset-sm-1
          </Col>
        </Row>
        <Row>
          <Col
            className="bg-light border"
            md={{
              offset: 3,
              size: 6
            }}
            sm="12"
          >
            .col-sm-12 .col-md-6 .offset-md-3
          </Col>
        </Row>
        <Row>
          <Col
            className="bg-light border"
            sm={{
              offset: 1,
              size: 'auto'
            }}
          >
            .col-sm-auto .offset-sm-1
          </Col>
          <Col
            className="bg-light border"
            sm={{
              offset: 1,
              size: 'auto'
            }}
          >
            .col-sm-auto .offset-sm-1
          </Col>
        </Row> */}
      </Container>
    </div>
  )
}

export default NavBar;