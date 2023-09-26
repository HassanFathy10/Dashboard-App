import React, { Fragment } from "react";
import { Container, Row } from "react-bootstrap";
import SideBar from "../Component/SideBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <article className="d-flex">
        <SideBar />
        <Container>
          <Row>
            <Outlet />
          </Row>
        </Container>
      </article>
    </Fragment>
  );
}

export default App;
