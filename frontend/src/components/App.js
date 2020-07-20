import React, { Component } from "react";
import { render } from "react-dom";
import { Col, Container, Row } from "reactstrap";
import NewPostModal from "./NewPostModal";
import PostList from "./PostList";
import axios from "axios";

var API_URL = "api/posts/"

class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.resetState();
  }

  getPosts = () => {
    axios.get(API_URL).then(res => this.setState({ posts: res.data.results }));
  };

  resetState = () => {
    this.getPosts();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <PostList
              posts={this.state.posts}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewPostModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const container = document.getElementById("app");
render(<Home />, container);