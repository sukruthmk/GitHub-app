import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Routes from "./Routes";

class App extends React.Component {
  state = {
    checkingSession: true
  };

  postCallback = value => {
    this.setState({ checkingSession: false });
  };

  render() {
    return (
      <Container>
        <Row>
          <Routes
            checkingSession={this.state.checkingSession}
            postCallback={this.postCallback}
          />
        </Row>
      </Container>
    );
  }
}

export default withRouter(App);
