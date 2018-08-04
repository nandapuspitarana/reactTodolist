import React, { Component } from 'react';
import Time from '../Components/Time';
import TodoInput from '../Components/TodoInput';
import { Container, Row, Col } from 'reactstrap';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Row className="vh-100">
          <Col xs={{ size: 12 }} className="box">
            <Time />
            <TodoInput />
          </Col>
        </Row>
      </Container>
    );
  }
}
