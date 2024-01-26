import React, { Fragment } from "react";
import { Container, Row } from "react-bootstrap";
import SideBar from "../Component/SideBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <article className="p-0 col-lg-2 col-md-2 col-sm-0">
            <SideBar />
          </article>
          <article className="col-lg-10 col-md-10 col-sm-12">
            <Outlet />
          </article>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
