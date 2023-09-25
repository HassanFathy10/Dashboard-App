import React, { Fragment } from "react";
import { Container, Row } from "react-bootstrap";
import SideBar from "../Component/SideBar";
import Option1 from "./Option1";

function App() {
  return (
    <Fragment>
      <article className="d-flex">
        <SideBar />
        <Container>
          <Row>
            <Option1 />
          </Row>
        </Container>
      </article>
    </Fragment>
  );
}

export default App;
