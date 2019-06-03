import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import auth from '../common/auth/auth';
import styled from "styled-components";

import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";

const MainContent = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  overflow: auto;
`;
const Content = styled.div`
  margin: auto;
  max-height: 100%;
`;
const TextContainer = styled.div`
  margin-top: 15px;
  width: 100%;
  text-align: center;
`;

class Login extends React.PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <TextContainer>
            <h1>Welcome To GitKoj</h1>
            <p>
              A simple application to star, search and unstar github repositories
            </p>
          </TextContainer>
          <MainContent>
            <Content>
              <Button
                href={auth.getAuthUrl()}
                className="btn btn-social btn-github"
              >
                <span className="fa fa-github" /> Sign in with Github
              </Button>
            </Content>
          </MainContent>
        </Row>
      </Container>
    );
  }
}

export default Login;
