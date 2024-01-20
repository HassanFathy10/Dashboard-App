import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../Component/SideBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col sm={2} className="p-0">
            <SideBar />
          </Col>
          <Col sm={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
