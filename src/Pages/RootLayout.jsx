import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../Component/SideBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Row>
        <Col sm={1}>
          <SideBar />
        </Col>
        <Col sm={10}>
          <Outlet />
        </Col>
      </Row>
    </Fragment>
  );
}

export default App;
